// 基础模块
import React, { PureComponent } from 'react';

// 样式
import './style/Desktop.less';

// 组件
import CSSTransition from './CSSTransition';
import SwitchTransition from './SwitchTransition';
import TransitionGroup from './TransitionGroup';
// import SwitchTransitionGroup from './SwitchTransitionGroup';
import CSSModuleTransition from './CSSModuleTransition';


class Desktop extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="animation">
        <CSSTransition />
        <SwitchTransition />
        <TransitionGroup />
        <CSSModuleTransition />
      </div>
    );
  }
}

export default Desktop;