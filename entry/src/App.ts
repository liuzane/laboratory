// Utils
import { hyperscript as h } from '@laboratory/common/utils';

// Web Components
import { PageAnchor, AtomBackground } from '@laboratory/common/components';

// Style
import './style.css';

interface EntryItem {
  text: string;
  href: string;
}

enum MouseDirection {
  Top,
  Right,
  Bottom,
  Left,
  Center
}

export default class App {
  constructor() {
    PageAnchor.define();
    AtomBackground.define();
  }

  private entries: EntryItem[] = [
    {
      text: 'Login Page',
      href: '/login'
    },
    {
      text: 'Solar System',
      href: '/solar-system'
    },
    {
      text: 'Vue Admin',
      href: '/vue'
    },
    {
      text: 'React Admin',
      href: '/react'
    },
  ];

  // 鼠标切入方向
  private getMouseDirection = (event: MouseEvent): MouseDirection => {
    const rect: DOMRect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const centerX: number = rect.left + rect.width / 2;
    const centerY: number = rect.top + rect.height / 2;
    const mouseX: number = event.clientX;
    const mouseY: number = event.clientY;
    
    // 计算相对于中心点的位置
    const x: number = mouseX - centerX;
    const y: number = mouseY - centerY;
    
    // 计算距离中心点的距离
    const distance: number = Math.sqrt(x * x + y * y);
    
    // 如果距离太小，可能无法准确判断方向
    if (distance < 5) return MouseDirection.Center;
    
    // 计算角度
    let angle: number = Math.atan2(y, x) * 180 / Math.PI;
    
    // 将角度转换为0-360范围
    angle = (angle + 360) % 360;
    
    // 判断方向
    if (angle >= 315 || angle < 45) return MouseDirection.Right;
    if (angle >= 45 && angle < 135) return MouseDirection.Bottom;
    if (angle >= 135 && angle < 225) return MouseDirection.Left;
    return MouseDirection.Top;
  }

  private onMouseEnter(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const activeElement = target.querySelector('.list__item--active') as HTMLElement;
    activeElement.style.transition = 'none';
    switch(this.getMouseDirection(event)) {
      case MouseDirection.Top:
        activeElement.style.top = '-100%';
        activeElement.style.left = '0';
        break;

      case MouseDirection.Right:
        activeElement.style.top = '0';
        activeElement.style.left = '100%';
        break;

      case MouseDirection.Bottom:
        activeElement.style.top = '100%';
        activeElement.style.left = '0';
        break;

      case MouseDirection.Left:
        activeElement.style.top = '0';
        activeElement.style.left = '-100%';
        break;
    }
    
    window.requestAnimationFrame(() => {
      setTimeout(() => {
        activeElement.style.transition = 'all 0.3s ease-in-out';
        activeElement.style.top = '0';
        activeElement.style.left = '0';
      }, 0);
    });
  }

  private onMouseLeave(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const activeElement = target.querySelector('.list__item--active') as HTMLElement;
    switch(this.getMouseDirection(event)) {
      case MouseDirection.Top:
        activeElement.style.top = '-100%';
        activeElement.style.left = '0';
        break;

      case MouseDirection.Right:
        activeElement.style.top = '0';
        activeElement.style.left = '100%';
        break;

      case MouseDirection.Bottom:
        activeElement.style.top = '100%';
        activeElement.style.left = '0';
        break;

      case MouseDirection.Left:
        activeElement.style.top = '0';
        activeElement.style.left = '-100%';
        break;
    }
  }

  public render() {
    return h('div', { className: 'container' }, [
      h('atom-background', {
        attrs: {
          animation: true,
          'active-button-text': 'On Effect',
          'inactive-button-text': 'Off Effect'
        }
      }),
      h('div', { className: 'wrapper' }, [
        h('ul', { className: 'list' }, this.entries.map((item: EntryItem) => (
          h('li', {
            className: 'list__item',
            onMouseEnter: this.onMouseEnter.bind(this),
            onMouseLeave: this.onMouseLeave.bind(this)
          }, [
            h('div', { className: 'list__item--active' }),
            h('page-anchor', { attrs: { href: item.href, block: '' } }, item.text)
          ])
        )))
      ])
    ]);
  }
}
