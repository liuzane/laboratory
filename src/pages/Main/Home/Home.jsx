// 基础模块
import React, { Component } from 'react';

// 第三方模块
import { fromJS, is } from 'immutable';


class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    // console.log(new Date('2018-11-30 00:00:00.0').format('yyyy-MM-dd'), 15)

    // 数组乱序
    // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // arr.sort(function () {
    //  return Math.random() - 0.5;
    // });
    //
    // console.log(arr, 21);
  }

  shouldComponentUpdate (nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
  }

  render () {
    return (
      <div>
        Home
      </div>
    );
  }
}

export default Home;