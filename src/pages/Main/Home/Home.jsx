//基础模块
import React, { Component } from 'react';

//第三方模块
import { fromJS, is } from 'immutable';


class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  };

  componentDidMount () {
    // console.log(new Date('2018-11-30 00:00:00.0').format('yyyy-MM-dd'), 15)
  };

  shouldComponentUpdate (nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
  };

  render () {
    return (
      <div>
        Home
      </div>
    );
  };
};

export default Home;