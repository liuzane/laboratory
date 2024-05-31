import { hyperscript as h } from '@laboratory/common/utils';

export interface Iline {
  beginX: number;
  beginY: number;
  closeX: number;
  closeY: number;
  opacity: number;
}

export interface ICircle {
  x: number;
  y: number;
  radius: number;
  moveX: number;
  moveY: number;
  color: string;
}

export class BackgroundAtom extends HTMLElement {
  static tagName: string;
  static observedAttributes: string[] = ['point', 'animation'];
  static style: string;
  static template: HTMLTemplateElement;
  static define() {
    if (!window.customElements.get(BackgroundAtom.tagName)) {
      window.customElements.define(BackgroundAtom.tagName, BackgroundAtom);
    }
  }

  private _shadowRoot: ShadowRoot;
  private $canvas: HTMLCanvasElement;
  private animation: boolean;
  private width: number;
  private height: number;
  private point: number;
  private ctx: CanvasRenderingContext2D;
  private circles: ICircle[];
  private requestId: number;

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._shadowRoot.appendChild(BackgroundAtom.template.content.cloneNode(true));
    this.$canvas = this._shadowRoot.querySelector('canvas');
    this.animation = this.getAttribute('animation') === 'true'
    this.width = 0;
    this.height = 0;
    this.point = this.getAttribute('point') ? Number(this.getAttribute('point')) : 35;
    this.circles = [];
  }

  public connectedCallback() {
    this.initialize();
  }

  public disconnectedCallback() {}

  public attributeChangedCallback(name: string, _oldVal: string, newVal: string) {
    console.log('attributeChangedCallback', name, newVal);
    switch (name) {
      case 'point':
        this.point = newVal ? Number(newVal) : this.point;
        break;

      case 'animation':
        this.animation = newVal === 'true'
        break;
    }
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
    console.log('this.animation', this.animation);
    console.log('this.getAttribute(animation)', this.getAttribute('animation'));
    if (this.animation) {
      this.start();
    }
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
    const circles = [];
    for (let i = 0; i < this.point; i++) {
      circles.push(
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
    this.circles = circles;
    this.draw();
  }

  // 开始动画
  public start(): number {
    const animation = () => {
      for (let i = 0; i < this.point; i++) {
        const circle = this.circles[i];
        circle.x += circle.moveX;
        circle.y += circle.moveY;
        if (circle.x > this.width) {
          circle.x = 0;
        } else if (circle.x < 0) {
          circle.x = this.width;
        }
        if (circle.y > this.height) {
          circle.y = 0;
        } else if (circle.y < 0) {
          circle.y = this.height;
        }
      }
      this.draw();
      this.requestId = window.requestAnimationFrame(animation);
    }
    this.requestId = window.requestAnimationFrame(animation);
    return this.requestId;
  }

  // 停止动画
  public stop(): void {
    if (this.requestId) {
      window.cancelAnimationFrame(this.requestId);
    }
  }

  // 点：圆心xy坐标，半径，每帧移动xy的距离
  private getCircle(x: number, y: number, radius: number, moveX: number, moveY: number, color: string): ICircle {
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
  ): ICircle {
    const circle: ICircle = this.getCircle(x, y, radius, moveX, moveY, color);
    ctx.beginPath();
    ctx.fillStyle = circle.color;
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
    return circle;
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
    const point = this.point;
    const circles = this.circles;

    try {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    } catch (e) {
      ctx = this.getCanvasContext();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    for (let i = 0; i < point; i++) {
      const circle = circles[i];
      this.drawAtom(ctx, circle.x, circle.y, circle.radius, null, null, circle.color);
    }

    for (let i = 0; i < point; i++) {
      for (let j = 0; j < point; j++) {
        if (i + j < point) {
          const A = Math.abs(circles[i + j].x - circles[i].x);
          const B = Math.abs(circles[i + j].y - circles[i].y);
          const lineLength = Math.sqrt(A * A + B * B);
          const C = (1 / lineLength) * 7 - 0.009;
          const lineOpacity = C > 0.03 ? 0.03 : C;

          if (lineOpacity > 0) {
            this.drawLine(ctx, circles[i].x, circles[i].y, circles[i + j].x, circles[i + j].y, lineOpacity);
          }
        }
      }
    }
  }
}

BackgroundAtom.tagName = 'background-atom';

BackgroundAtom.style = `
  .bg-atom__container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .bg-atom__switch {
    position: absolute;
    top: 10px;
    right: 10px;
    border: none;
    outline: none;
    background-color: transparent;
    color: #2f54eb;
    font-size: 12px;
    cursor: pointer;
  }
`;

BackgroundAtom.template = h('template', null, [
  h('style', null, BackgroundAtom.style),
  h('div', { className: 'bg-atom__container' }, [
    h('canvas', null),
    h(
      'button',
      {
        className: 'bg-atom__switch',
        onclick: (event: Event) => {
          console.log('button', event);
        }
      },
      [h('slot', { name: 'button-text' })]
    )
  ])
]);
