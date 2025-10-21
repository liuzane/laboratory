// Utils
import { hyperscript as h } from '@laboratory/common/utils';

// Web Components
import { PageAnchor, AtomBackground } from '@laboratory/common/components';

// Style
import './style.css';

// Svgs
import LoginSvg from '@/icons/login.svg';
import SolarSystemSvg from '@/icons/solar-system.svg';
import VueSvg from '@/icons/vue.svg';
import ReactSvg from '@/icons/react.svg';

interface EntryItem {
  text: string;
  path: string;
  icon: string;
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
      path: '/login',
      icon: LoginSvg
    },
    {
      text: 'Solar System',
      path: '/solar-system',
      icon: SolarSystemSvg
    },
    {
      text: 'Vue Admin',
      path: '/vue',
      icon: VueSvg
    },
    {
      text: 'React Admin',
      path: '/react',
      icon: ReactSvg
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

  private onMouseEnter(event: MouseEvent): void {
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

  private onMouseLeave(event: MouseEvent): void {
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

  private onItemClick(item: EntryItem): void {
    window.location.href = `${PageAnchor.PUBLIC_PATH}#${item.path}`;
  }

  public render(): HTMLElement {
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
            onMouseLeave: this.onMouseLeave.bind(this),
            onClick: this.onItemClick.bind(this, item)
          }, [
            h('div', { className: 'list__item--active' }),
            h('div', { className: 'list__item-icon', innerHTML: item.icon }),
            h('p', { className: 'list__item-text' }, item.text)
          ])
        )))
      ])
    ]);
  }
}
