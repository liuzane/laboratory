//基础模块
import React, { Component } from 'react';

const files = require.context('./my_module', false, /\.js$/);
console.log(files.keys())

console.log(files('./bar.js'), 7);

export default class Desktop extends Component {
  render() {
    return (
      <div>
        ES6 Module 语法测试
      </div>
    );
  };
};