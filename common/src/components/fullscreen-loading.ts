// Bases
import BaseWebComponent from './base-web-component';

// Utils
import { hyperscript as h } from '../utils';

// Svgs
import LoadingSvg from './svgs/loading.svg?raw';

// Styles
import cssText from './styles/fullscreen-loading.css?raw';

export class FullscreenLoading extends BaseWebComponent {
  static tagName: string = 'fullscreen-loading';

  constructor() {
    super();
    this.init(this.render(), cssText);
  }

  private getText(): string | null {
    return this.getAttribute('text');
  }

  private render(): HTMLElement {
    const text: string | null = this.getText();
    return h('div.fullscreen-loading_container', null, [
      h('div.fullscreen-loading__content', null, [
        h('div.fullscreen-loading__viewbox', { innerHTML: LoadingSvg }),
        h('p.fullscreen-loading__text', null, text ?? 'Wecome to Laboratory')
      ])
    ]);
  }
}
