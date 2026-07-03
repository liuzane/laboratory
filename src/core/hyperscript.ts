export interface HyperElementTagNameMap extends HTMLElementTagNameMap {
  [customTagName: `${string}-${string}`]: HTMLElement;
}

export interface CSSStyleAttributes {
  style?: string | Partial<CSSStyleDeclaration>;
}

// 从带选择器的字符串中提取纯标签名（取第一个 '.' 或 '#' 之前的部分）
type ExtractTagName<S extends string>
  = S extends `${infer Tag}.${string}` ? Tag
    : S extends `${infer Tag}#${string}` ? Tag
      : S;

// 确保提取的标签名是 HyperElementTagNameMap 的有效键
type TagKey<T extends string> = ExtractTagName<T> & keyof HyperElementTagNameMap;

export function hyperscript<T extends string>(
  tagName: T,
  attributes?: (CSSStyleAttributes & Record<string, unknown> & Partial<GlobalEventHandlers>) | null,
  children?: string | HTMLElement | ChildNode | (HTMLElement | ChildNode)[],
): HyperElementTagNameMap[TagKey<T>] {
  // 解析标签名与 CSS 选择器（class / id）
  const tagNameWithCssSelectorArr: string[] = tagName.split(/(?=[.#])/);
  const pureTagName: string = tagNameWithCssSelectorArr.shift()!;
  const element: HyperElementTagNameMap[TagKey<T>] = document.createElement(pureTagName) as HyperElementTagNameMap[TagKey<T>];

  // 处理类名和 id
  tagNameWithCssSelectorArr.forEach((item: string) => {
    const selectorName: string = item.substring(1);
    if (item[0] === '.') {
      element.classList.add(selectorName);
    } else if (item[0] === '#') {
      element.setAttribute('id', selectorName);
    }
  });

  // 处理属性
  if (attributes) {
    for (const attributeName in attributes) {
      const attributeValue: unknown = attributes[attributeName];
      if (attributeName === 'style') {
        if (typeof attributeValue === 'string') {
          element.style.cssText = attributeValue;
        } else if (attributeValue instanceof CSSStyleDeclaration) {
          for (const styleName in attributeValue) {
            element.style.setProperty(styleName, attributeValue[styleName]);
          }
        }
      } else if (/^on[a-zA-Z]+/.test(attributeName) && typeof attributeValue === 'function') {
        element.addEventListener(
          attributeName.substring(2).toLowerCase(),
          attributeValue as (event: Event) => void,
          false,
        );
      } else if (attributeName === 'attrs' && typeof attributeValue === 'object' && attributeValue !== null) {
        for (const key in attributeValue as Record<string, unknown>) {
          setAttribute(element, key, (attributeValue as Record<string, unknown>)[key]);
        }
      } else if (attributeName.startsWith('data-')) {
        setAttribute(element, attributeName, attributeValue);
      } else {
        // 直接赋值 DOM 属性（如 innerHTML、value 等）
        (element as any)[attributeName] = attributeValue;
      }
    }
  }

  // 处理子节点
  if (children) {
    if (typeof children === 'string') {
      const child: Text | null = document.createTextNode(children);
      appendChild(element, child);
    } else if (Array.isArray(children)) {
      children.forEach((child: HTMLElement | ChildNode | Text) => appendChild(element, child));
    } else {
      appendChild(element, children);
    }
  }

  return element;
}

function setAttribute(element: HTMLElement, attributeName: string, attributeValue: unknown): void {
  if (attributeValue === null || attributeValue === undefined) {
    element.removeAttribute(attributeName);
    return;
  }
  switch (typeof attributeValue) {
    case 'number':
    case 'boolean':
      element.setAttribute(attributeName, attributeValue.toString());
      break;
    case 'string':
    default:
      element.setAttribute(attributeName, String(attributeValue));
      break;
  }
}

function appendChild(parent: HTMLElement, child: HTMLElement | ChildNode | Text): void {
  if (parent.tagName.toLowerCase() === 'template') {
    (parent as HTMLTemplateElement).content.appendChild(child);
  } else {
    parent.appendChild(child);
  }
}
