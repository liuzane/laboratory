//基础模块
import React, { Component } from 'react';

//第三方模块
import { fromJS, is } from 'immutable';


class Todo extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  };

  componentWillMount () {

  };

  shouldComponentUpdate (nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
  };

  render () {
    return (
      <div>
        Todo
      </div>
    );
  };
};

export default Todo;