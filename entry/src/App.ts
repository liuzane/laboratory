// Utils
import { hyperscript as h } from '@laboratory/common/utils';

// Web Components
import { PageAnchor, AtomBackground } from '@laboratory/common/components';

// Style
import './style.css';

export default class App {
  constructor() {
    PageAnchor.define();
    AtomBackground.define();
  }

  render() {
    return h('div', { className: 'container' }, [
      h('atom-background', {
        animation: true,
        'active-button-text': 'On Special',
        'inactive-button-text': 'Off Special'
      }),
      h('div', { className: 'wrapper' }, [
        h('h1', null, 'Entry Page'),
        h('p', null, 'description description description description description description'),
        h('ul', null, [
          h('li', null, [h('page-anchor', { href: '/login' }, 'Login')]),
          h('li', null, [h('page-anchor', { href: '/solar-system' }, 'Solar System')]),
          h('li', null, [h('page-anchor', { href: '/vue' }, 'Vue')]),
          h('li', null, [h('page-anchor', { href: '/react' }, 'React')])
        ])
      ])
    ]);
  }
}
