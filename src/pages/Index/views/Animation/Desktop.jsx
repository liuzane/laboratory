// 基础模块
import React, { PureComponent } from 'react';

// 第三方模块
import _ from 'lodash';

// 样式
import './style/Desktop.less';

// 动画
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Desktop extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      list: [],
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

  render() {
    const { visible, list } = this.state;
    
    return (
      <div>
        <button onClick={ this.handleShow }>切换</button>
        <ReactCSSTransitionGroup
          transitionEnterTimeout={ 300 }
          transitionLeaveTimeout={ 300 }
          transitionName="animation-spread"
        >
          { visible ? <p className="animation__text">显示</p> : null }
        </ReactCSSTransitionGroup>

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
    );
  }
}

export default Desktop;