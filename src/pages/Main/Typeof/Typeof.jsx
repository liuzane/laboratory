//基础模块
import React, { PureComponent } from 'react';



export default class Typeof extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {};
  };
  
  componentWillMount () {
    // let array = [];
    // let object = {};
    // let func = () => {};
    // let string = '';
    // let number = 0;
    // let undef = undefined;
    // let nul = null;
    // console.log( object instanceof Array );
    // console.log(typeof func);
  };

  render () {
    return (
      <div>
        Typeof
      </div>
    );
  };
};