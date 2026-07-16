// Core
import { hyperscript as h } from '@/core/hyperscript';

// i18n
import { t } from '@/i18n';

// Images
import ViteMicroappReactExampleImage from '@/images/vite-microapp-react-example.png';
import MockDatabaseImage from '@/images/mock-database.png';
import WebpackModuleFederationDemoImage from '@/images/webpack-module-federation-demo.png';
import WebpackMpaImage from '@/images/webpack-mpa.png';
import SolarSystemImage from '@/images/solar-system.png';

export interface EntryItem {
  title: string;
  description: string;
  path: string;
  image: string;
}

enum MouseDirection {
  Top,
  Right,
  Bottom,
  Left,
  Center,
}

export default class ProjectGrid {
  private entries: EntryItem[] = [
    {
      title: t('projects.vite-microapp-react-demo.title'),
      description: t('projects.vite-microapp-react-demo.description'),
      path: 'https://liuzane.github.io/vite-microapp-react-example',
      image: ViteMicroappReactExampleImage,
    },

    {
      title: t('projects.mock-database.title'),
      description: t('projects.mock-database.description'),
      path: 'https://github.com/liuzane/mock-database',
      image: MockDatabaseImage,
    },

    {
      title: t('projects.webpack-module-federation-demo.title'),
      description: t('projects.webpack-module-federation-demo.description'),
      path: 'https://liuzane.github.io/webpack-module-federation-demo',
      image: WebpackModuleFederationDemoImage,
    },

    {
      title: t('projects.webpack-mpa.title'),
      description: t('projects.webpack-mpa.description'),
      path: 'https://liuzane.github.io/webpack-mpa',
      image: WebpackMpaImage,
    },

    {
      title: t('projects.solar-system.title'),
      description: t('projects.solar-system.description'),
      path: 'https://liuzane.github.io/solar-system',
      image: SolarSystemImage,
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
  };

  private onMouseEnter(event: MouseEvent): void {
    const target: HTMLElement = event.currentTarget as HTMLElement;
    const activeElement: HTMLElement = target.querySelector('.project-grid__item--active') as HTMLElement;
    activeElement.style.transition = 'none';
    switch (this.getMouseDirection(event)) {
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
    const target: HTMLElement = event.currentTarget as HTMLElement;
    const activeElement: HTMLElement = target.querySelector('.project-grid__item--active') as HTMLElement;
    switch (this.getMouseDirection(event)) {
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

  public render(): HTMLElement {
    return h('ul', { className: 'project-grid' }, this.entries.map((item: EntryItem) => (
      h('li', {
        className: 'project-grid__item',
        onMouseEnter: this.onMouseEnter.bind(this),
        onMouseLeave: this.onMouseLeave.bind(this),
      }, [
        h('a', { className: 'project-grid__item-link', href: item.path, target: '_blank' }, [
          h('div', { className: 'project-grid__item--active' }),
          h('img', { className: 'project-grid__item-image', src: item.image, alt: item.title }),
          h('p', { className: 'project-grid__item-title', title: item.title }, item.title),
          h('p', { className: 'project-grid__item-description', title: item.description }, item.description),
        ]),
      ])
    )));
  }
}
