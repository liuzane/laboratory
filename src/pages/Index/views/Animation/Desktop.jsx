// 基础模块
import React, { PureComponent } from 'react';

// 第三方模块
import _ from 'lodash';

// 样式
import './style/Desktop.less';

// 动画
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const Box = (props) => (
  <div className="animation__box">{ props.children }</div>
);

class Desktop extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      list: [],
      currentIndex: 0,
      animationMode: 'animation-fade',
    };
  }

  handleShow = () => {
    const { visible } = this.state;

    this.setState({ visible: !visible });
  };

  handleAdd = () => {
    const letter = 'abcefghijklmnopqrstuvwxyz';
    const list = _.cloneDeep(this.state.list);

    list.push(letter[Math.floor(Math.random() * 25)]);

    this.setState({ list });
  };

  handleRemove = (index) => {
    const list = _.cloneDeep(this.state.list);

    list.splice(index, 1);

    this.setState({ list });
  };

  handleTrigger = (index) => {
    if (index === 0) {
      this.setState({ animationMode: 'animation-left' });
    } else if (index === 1) {
      this.setState({ animationMode: 'animation-right' });
    } else {
      this.setState({ animationMode: 'animation-fade' });
    }
    this.setState({ currentIndex: index });
  };

  render() {
    const { visible, list, animationMode } = this.state;
    
    return (
      <div className="animation">
        <div className="animation-container">
          <button onClick={ this.handleShow }>切换</button>
          <ReactCSSTransitionGroup
            transitionEnterTimeout={ 300 }
            transitionLeaveTimeout={ 300 }
            transitionName="animation-spread"
          >
            { visible ? <p className="animation__text">显示</p> : null }
          </ReactCSSTransitionGroup>
        </div>

        <h1>h1</h1>
        <h2>h2</h2>
        <p>p</p>

        <div className="animation-container">
          <button onClick={ this.handleTrigger.bind(this, 0) }>1</button>
          <button onClick={ this.handleTrigger.bind(this, 1) }>2</button>
          <button onClick={ this.handleTrigger.bind(this, 2) }>3</button>

          <ReactCSSTransitionGroup
            component={ Box }
            transitionEnterTimeout={ 300 }
            transitionLeaveTimeout={ 300 }
            transitionName={ animationMode }
          >
            {
              [ 1, 2, 3].map((item, index) => {
                if (this.state.currentIndex === index) {
                  return (
                    <div key={ item } className="animation__box-item">{ item }</div>
                  );
                } else {
                  return null;
                }
              })
            }
          </ReactCSSTransitionGroup>
        </div>

        <div className="animation-container">
          <button onClick={ this.handleAdd }>添加</button>
          <ReactCSSTransitionGroup
            transitionEnterTimeout={ 300 }
            transitionLeaveTimeout={ 300 }
            transitionName="animation-spread"
          >
            {
              list.map((item, index) => (
                <p key={ item } onClick={ this.handleRemove.bind(this, index) }>{ item }.{ index }</p>
              ))
            }
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}

export default Desktop;