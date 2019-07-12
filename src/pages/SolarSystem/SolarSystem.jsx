// 基础模块
import React, { Component } from 'react';

// 路由配置
import { goto, getUrlPath } from '@/router';

// 方法汇总
import './functions';


class SolarSystem extends Component {
  componentDidMount() {
    const width = document.body.clientWidth;
    const height = document.body.clientHeight;
    const canvas = document.getElementById('canvas'),
      ctx = canvas.getContext('2d'),
      W = width,
      H = height;
  
    canvas.width = width;
    canvas.height = height;
    canvas.style.background = '#000';
  }

  render() {
    return (
      <canvas id="canvas" style={{ background: '#000' }} />
    );
  }
}

export default SolarSystem;