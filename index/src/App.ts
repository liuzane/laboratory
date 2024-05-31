// Utils
import { hyperscript as h } from '@laboratory/common/utils';

// Web Components
import { PageAnchor } from '@laboratory/common/components';
import { BackgroundAtom } from './background-atom';

export default class App {
  constructor() {
    PageAnchor.define();
    BackgroundAtom.define();
  }

  render() {
    return h('div', { className: 'main-layout' }, [
      h('background-atom', { animation: true }, [
        h('span', { slot: 'button-text' }, 'On Special'),
      ]),
      // h('h1', null, 'Entry Page'),
      // h('p', null, 'description description description description description description'),
      // h('ul', null, [
      //   h('li', null, [
      //     h('page-anchor', { href: '/vue' }, 'Vue'),
      //   ]),
      //   h('li', null, [
      //     h('page-anchor', { href: '/react' }, 'React'),
      //   ]),
      // ])
    ])
  }
}
