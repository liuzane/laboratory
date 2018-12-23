//基础模块
import React, { Component } from 'react';

const files = require.context('.', true, /\.js$/);
console.log(files.keys())

console.log(files('./my_module/bar.js').default, 7);

export default class Desktop extends Component {
  render () {
    return (
      <div>
        ES6 Module 语法测试
      </div>
    );
  };
};