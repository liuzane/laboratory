// Bases
import BaseWebComponent from './base-web-component';

// Utils
import { hyperscript as h } from '../utils';

// Styles
import cssText from './styles/atom-background.css?raw';

export interface Iline {
  beginX: number;
  beginY: number;
  closeX: number;
  closeY: number;
  opacity: number;
}

export interface IAtom {
  x: number;
  y: number;
  radius: number;
  moveX: number;
  moveY: number;
  color: string;
}

export class AtomBackground extends BaseWebComponent {
  static tagName: string = 'atom-background';
  static observedAttributes: string[] = ['atoms', 'animation', 'active-button-text', 'inactive-button-text'];

  private $canvas: HTMLCanvasElement;
  private $button: HTMLButtonElement;
  private animation: boolean;
  private width: number;
  private height: number;
  private atoms: number;
  private ctx: CanvasRenderingContext2D;
  private actualAtoms: IAtom[];
  private requestId: number;

  constructor() {
    super();
    this.init(this.render(), cssText);
    this.$canvas = this.shadowRoot.querySelector('canvas');
    this.$button = this.shadowRoot.querySelector('button.atom-bg__switch');
    this.animation = this.getAttribute('animation') === 'true';
    this.width = 0;
    this.height = 0;
    this.atoms = Number(this.getAttribute('atoms')) || 35;
    this.actualAtoms = [];
  }

  public connectedCallback(): void {
    this.initialize();
  }

  public disconnectedCallback(): void {}

  public attributeChangedCallback(name: string, _oldVal: string, newVal: string): void {
    switch (name) {
      case 'atoms':
        this.atoms = newVal ? Number(newVal) : this.atoms;
        break;

      case 'animation':
        this.animation = newVal === 'true';
        break;
    }
  }

  private render(): HTMLElement {
    return h('div.atom-bg__container', null, [
      h('canvas.atom-bg__canvas'),
      h('button.atom-bg__switch')
    ]);
  }

  // 更新 switch button 文字
  private renderButton(): void {
    this.$button.innerText = this.getAttribute(this.animation ? 'inactive-button-text' : 'active-button-text');
  }

  // 初始化
  private initialize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.width = width;
    this.height = height;
    this.$canvas.width = width;
    this.$canvas.height = height;
    this.ctx = this.getCanvasContext();
    this.generateAtom();
    if (this.animation) {
      this.start();
    }
    this.renderButton();
    this.$button.addEventListener('click', this.onSwitchAnimationClick.bind(this));
  }

  // 获取 canvas context
  private getCanvasContext(): CanvasRenderingContext2D {
    const canvasContext: CanvasRenderingContext2D = this.$canvas.getContext('2d');
    canvasContext.strokeStyle = 'rgba(0, 0, 0, 0.2)';
    // this.ctx.strokeWidth = 1;
    canvasContext.fillStyle = 'rgba(0, 0, 0, 0.1)';
    return canvasContext;
  }

  // 生成原点到画布上
  private generateAtom(): void {
    const actualAtoms = [];
    for (let i = 0; i < this.atoms; i++) {
      actualAtoms.push(
        this.drawAtom(
          this.ctx,
          this.getRandomNumber(this.width),
          this.getRandomNumber(this.height),
          this.getRandomNumber(15, 2),
          this.getRandomNumber(20, -20) / 40,
          this.getRandomNumber(20, -20) / 40,
          `rgba(${this.getRandomNumber(255)}, ${this.getRandomNumber(255)}, ${this.getRandomNumber(255)}, .15)`
        )
      );
    }
    this.actualAtoms = actualAtoms;
    this.draw();
  }

  // 点：圆心xy坐标，半径，每帧移动xy的距离
  private getAtom(x: number, y: number, radius: number, moveX: number, moveY: number, color: string): IAtom {
    return {
      x,
      y,
      radius,
      moveX,
      moveY,
      color
    };
  }

  // 线条：开始xy坐标，结束xy坐标，线条透明度
  private getLine(beginX: number, beginY: number, closeX: number, closeY: number, opacity: number): Iline {
    return {
      beginX,
      beginY,
      closeX,
      closeY,
      opacity
    };
  }

  // 生成max和min之间的随机数
  private getRandomNumber(max: number, min: number = 0): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // 绘制原点
  private drawAtom(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number,
    moveX: number,
    moveY: number,
    color: string
  ): IAtom {
    const atom: IAtom = this.getAtom(x, y, radius, moveX, moveY, color);
    ctx.beginPath();
    ctx.fillStyle = atom.color;
    ctx.arc(atom.x, atom.y, atom.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    return atom;
  }

  // 绘制线条
  private drawLine(
    ctx: CanvasRenderingContext2D,
    beginX: number,
    beginY: number,
    closeX: number,
    closeY: number,
    opacity: number
  ): void {
    const line: Iline = this.getLine(beginX, beginY, closeX, closeY, opacity);
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(0, 0, 0, ' + opacity + ')';
    ctx.moveTo(line.beginX, line.beginY);
    ctx.lineTo(line.closeX, line.closeY);
    ctx.closePath();
    ctx.stroke();
  }

  // 每帧绘制
  private draw(): void {
    let ctx = this.ctx;
    const canvas = this.$canvas;
    const atoms = this.atoms;
    const actualAtoms = this.actualAtoms;

    try {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    } catch (e) {
      ctx = this.getCanvasContext();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    for (let i = 0; i < atoms; i++) {
      const atom = actualAtoms[i];
      this.drawAtom(ctx, atom.x, atom.y, atom.radius, null, null, atom.color);
    }

    for (let i = 0; i < atoms; i++) {
      for (let j = 0; j < atoms; j++) {
        if (i + j < atoms) {
          const A = Math.abs(actualAtoms[i + j].x - actualAtoms[i].x);
          const B = Math.abs(actualAtoms[i + j].y - actualAtoms[i].y);
          const lineLength = Math.sqrt(A * A + B * B);
          const C = (1 / lineLength) * 7 - 0.009;
          const lineOpacity = C > 0.03 ? 0.03 : C;

          if (lineOpacity > 0) {
            this.drawLine(
              ctx,
              actualAtoms[i].x,
              actualAtoms[i].y,
              actualAtoms[i + j].x,
              actualAtoms[i + j].y,
              lineOpacity
            );
          }
        }
      }
    }
  }

  // 开始动画
  public start(): number {
    const animation = () => {
      for (let i = 0; i < this.atoms; i++) {
        const atom = this.actualAtoms[i];
        atom.x += atom.moveX;
        atom.y += atom.moveY;
        if (atom.x > this.width) {
          atom.x = 0;
        } else if (atom.x < 0) {
          atom.x = this.width;
        }
        if (atom.y > this.height) {
          atom.y = 0;
        } else if (atom.y < 0) {
          atom.y = this.height;
        }
      }
      this.draw();
      this.requestId = window.requestAnimationFrame(animation);
    };
    this.requestId = window.requestAnimationFrame(animation);
    return this.requestId;
  }

  // 停止动画
  public stop(): void {
    if (this.requestId) {
      window.cancelAnimationFrame(this.requestId);
    }
  }

  // 开启 / 关闭 原子动画事件
  private onSwitchAnimationClick(): void {
    if (this.animation) {
      this.stop();
      this.animation = false;
    } else {
      this.start();
      this.animation = true;
    }
    this.renderButton();
  }
}