export interface HyperElementTagNameMap extends HTMLElementTagNameMap {
  [customTagName: `${string}-${string}`]: HTMLElement;
}

export interface CSSStyleAttributes {
  style?: string | Partial<CSSStyleDeclaration>;
}

export function hyperscript<T extends keyof HyperElementTagNameMap>(
  tagName: string,
  attributes?: (CSSStyleAttributes & Record<string, unknown> & Partial<GlobalEventHandlers>) | null,
  children?: string | HTMLElement | ChildNode | (HTMLElement | ChildNode)[]
): HyperElementTagNameMap[T] {
  const tagNameWithCssSelectorArr: string[] = tagName.split(/(?=[.#])/);
  const pureTagName: string = tagNameWithCssSelectorArr.shift();
  const element = document.createElement(pureTagName) as HyperElementTagNameMap[T];
  tagNameWithCssSelectorArr.forEach((item: string) => {
    const selectorName: string = item.substring(1, item.length);
    if (item[0] === '.') {
      element.classList.add(selectorName);
    } else if (item[0] === '#') {
      element.setAttribute('id', selectorName);
    }
  });
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
      } else if (/on[a-zA-Z]+/.test(attributeName) && typeof attributeValue === 'function') {
        if (element.addEventListener) {
          element.addEventListener(
            attributeName.substring(2).toLocaleLowerCase(),
            attributeValue as (event: Event) => void,
            false
          );
        }
      } else if (attributeName === 'attrs' && typeof attributeValue === 'object') {
        for (const key in attributeValue) {
          setAttribute(element, key, attributeValue[key]);
        }
      } else if (attributeName.substr(0, 5) === 'data-') {
        setAttribute(element, attributeName, attributeValue);
      } else {
        element[attributeName] = attributeValue;
      }
    }
  }
  if (children) {
    if (typeof children === 'string') {
      const child = document.createTextNode(children);
      appendChild(element, child);
    } else if (children instanceof Array) {
      children.forEach(child => {
        appendChild(element, child);
      });
    } else {
      appendChild(element, children);
    }
  }
  return element;
}

function setAttribute(element: HTMLElement, attributeName: string, attributeValue: unknown): void {
  switch (typeof attributeValue) {
    case 'number':
    case 'boolean':
      element.setAttribute(attributeName, attributeValue.toString());
      break;

    case 'string':
    default:
      element.setAttribute(attributeName, attributeValue as string);
      break;
  }
}

function appendChild(parent: HTMLElement, child: HTMLElement | ChildNode | Text): void {
  if (parent.tagName.toLocaleLowerCase() === 'template') {
    (parent as HTMLTemplateElement).content.appendChild(child);
  } else {
    parent.appendChild(child);
  }
}
