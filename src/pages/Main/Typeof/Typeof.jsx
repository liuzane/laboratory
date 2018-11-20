//基础模块
import React, { PureComponent } from 'react';

//第三方模块
import { fromJS, is } from 'immutable';



export default class Typeof extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {};
  };
  
  componentWillMount () {
    let array = [];
    let object = {};
    let func = () => {};
    let string = '';
    let number = 0;
    let undef = undefined;
    let nul = null;
    // console.log( object instanceof Array );
    console.log(typeof func);
  };

  shouldComponentUpdate (nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
  };

  render () {
    return (
      <div>
        Typeof
      </div>
    );
  };
};