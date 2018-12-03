//基础模块
import React, { Component } from 'react';

//第三方模块
import { fromJS, is } from 'immutable';

//样式
import './style/Todo.css';


class Todo extends Component {
  constructor (props) {
    super(props);
    this.state = {
      floor: Array.apply(null, { length: 20 }).map((item, index) => ({
        index,
        color: `rgb(${ this.num(255) }, ${ this.num(255) }, ${ this.num(255) })`,
      })),
    };
  };

  componentWillMount () {

  };

  shouldComponentUpdate (nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
  };
  
  num = (max, min = 0) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  render () {
    return (
      <ul className="todo">
        {
          this.state.floor.map(item => (
            <li className="todo-list" key={ item.index }>{ item.index }</li>
          ))
        }
      </ul>
    );
  };
};

export default Todo;