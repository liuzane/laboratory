// 基础模块
import React, { Component } from 'react';

// 第三方模块
import { fromJS, is } from 'immutable';

// 布局组件
import { LayContainer } from '@-react/layouts/LayMain';

// 样式
import './Desktop.css';


class Todo extends Component {
  constructor (props) {
    super(props);
    this.state = {
      floor: Array.apply(null, { length: 20 }).map((item, index) => ({
        index,
        color: `rgba(${ this.num(255) }, ${ this.num(255) }, ${ this.num(255) }, 1)`,
      })),
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
  }
  
  num = (max, min = 0) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  render() {
    return (
      <LayContainer>
        <ul className="todo">
          {
            this.state.floor.map(item => (
              <li
                className="todo-list"
                key={ item.index }
                style={{ color: item.color }}
              >
                { item.index }
              </li>
            ))
          }
        </ul>
      </LayContainer>
    );
  }
}

export default Todo;