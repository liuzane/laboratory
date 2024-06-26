import { hyperscript as h } from '../utils/hyperscript';

export class PageAnchor extends HTMLElement {
  static tagName: string;
  static observedAttributes: string[] = ['href', 'download'];
  static style: string;
  static template: HTMLTemplateElement;
  static define() {
    if (!window.customElements.get(PageAnchor.tagName)) {
      window.customElements.define(PageAnchor.tagName, PageAnchor);
    }
  }

  private _shadowRoot: ShadowRoot;
  private $anchor: HTMLAnchorElement;

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(PageAnchor.template.content.cloneNode(true));
    this.$anchor = this._shadowRoot.querySelector('a');
  }

  public attributeChangedCallback(name: string, _oldVal: string, newVal: string) {
    switch (name) {
      case 'href':
        this.$anchor.href = `${__PUBLIC_PATH}#${newVal}`;
        break;

      case 'download':
        this.$anchor.download = newVal;
        break;
    }
  }
}

PageAnchor.tagName = 'page-anchor';

PageAnchor.style = `
  a {
    font-weight: 500;
    color: #646cff;
    text-decoration: inherit;
  }

  a:hover {
    color: #535bf2;
  }
`;

PageAnchor.template = h('template', null, [
  h('style', null, PageAnchor.style),
  h('a', { className: 'page-anchor' }, [h('slot', null)])
]);
