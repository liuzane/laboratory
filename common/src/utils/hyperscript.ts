export interface HyperElementTagNameMap extends HTMLElementTagNameMap {
  [customTagName: `${string}-${string}`]: HTMLElement;
}

export interface CSSStyleAttributes {
  style?: string | Partial<CSSStyleDeclaration>;
}

export function hyperscript<T extends keyof HyperElementTagNameMap>(
  tagName: T,
  attributes: (CSSStyleAttributes & Record<string, unknown> & Partial<GlobalEventHandlers>) | null,
  children?: string | HTMLElement | ChildNode | (HTMLElement | ChildNode)[]
): HyperElementTagNameMap[T] {
  const element = document.createElement(tagName) as HyperElementTagNameMap[T];
  if (attributes) {
    for (const attributeName in attributes) {
      const attributeValue: unknown = attributes[attributeName];
      switch (attributeName) {
        case 'className':
          if (typeof attributeValue === 'string') {
            element.className = attributeValue;
          }
          break;

        case 'style':
          if (typeof attributeValue === 'string') {
            element.style.cssText = attributeValue;
          } else if (attributeValue instanceof CSSStyleDeclaration) {
            for (const styleName in attributeValue) {
              element.style.setProperty(styleName, attributeValue[styleName]);
            }
          }
          break;

        case /on[a-zA-Z]+/.test(attributeName) ? attributeName : null:
          if (typeof attributeValue === 'function') {
            if (element.addEventListener) {
              element.addEventListener(
                attributeName.substring(2).toLocaleLowerCase(),
                attributeValue as (event: Event) => void,
                false
              );
            }
          }
          break;

        default:
          switch (typeof attributeValue) {
            case 'string':
              element.setAttribute(attributeName, attributeValue as string);
              break;

            case 'number':
            case 'boolean':
              element.setAttribute(attributeName, attributeValue.toString());
              break;
          }
          break;
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

function appendChild(parent: HTMLElement, child: HTMLElement | ChildNode | Text) {
  if (parent.tagName.toLocaleLowerCase() === 'template') {
    (parent as HTMLTemplateElement).content.appendChild(child);
  } else {
    parent.appendChild(child);
  }
}
