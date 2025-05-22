// Bases
import BaseWebComponent from './base-web-component';

// Utils
import { hyperscript as h } from '../utils';

// Styles
import cssText from './styles/page-anchor.css?raw';

export class PageAnchor extends BaseWebComponent {
  static tagName: string = 'page-anchor';
  static observedAttributes: string[] = ['href', 'download', 'block'];
  private $anchor: HTMLAnchorElement;

  constructor() {
    super();
    this.init(this.render(), cssText);
    this.$anchor = this.shadowRoot.querySelector('a');
  }

  public attributeChangedCallback(name: string, _oldVal: string, newVal: string) {
    switch (name) {
      case 'href':
        this.$anchor.href = `${__PUBLIC_PATH}#${newVal}`;
        break;

      case 'download':
        this.$anchor.download = newVal;
        break;
      
      case 'block':
        if (typeof newVal === 'string') {
          this.$anchor.classList.add('block');
        } else {
          this.$anchor.classList.remove('block');
        }
        break;
    }
  }

  private render(): HTMLElement {
    return h('a.page-anchor', null, h('slot'));
  }
}
