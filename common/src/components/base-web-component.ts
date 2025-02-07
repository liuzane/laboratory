// Styles
import baseCssText from './styles/base-web-component.css?raw';

export default class BaseWebComponent extends HTMLElement {
  static readonly tagName: string;
  static define() {
    const tagName: string = this.tagName;
    window.customElements.get(tagName) || window.customElements.define(tagName, this);
  }

  readonly type: string;
  public shadowRoot: ShadowRoot;

  constructor(mode?: ShadowRootMode) {
    super();
    this.attachShadow({ mode: mode || 'open' });
  }

  protected init(content: Node, cssText?: string): void {
    if (content) {
      this.shadowRoot.appendChild(content);
    }
    const css = new CSSStyleSheet();
    css.replaceSync(baseCssText + (cssText || ''));
    this.shadowRoot.adoptedStyleSheets.push(css);
  }
}
