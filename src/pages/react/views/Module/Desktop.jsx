// 基础模块
import React, { Component } from 'react';

// 布局组件
import { LayContainer } from '@-react/layouts/LayMain';

const files = require.context('./my_module', false, /\.js$/);
console.log(files.keys());

console.log(files('./bar.js'), 7);

export default class Desktop extends Component {
  render() {
    return (
      <LayContainer>
        ES6 Module 语法测试
      </LayContainer>
    );
  }
}