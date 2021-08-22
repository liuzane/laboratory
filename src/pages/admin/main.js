// service worker
import * as serviceWorker from '@/serviceWorker';

// 基础模块
import React from 'react';
import ReactDOM from 'react-dom';

// 全局样式
import '@/styles';

// 入口组件
import Admin from './Admin';


ReactDOM.render(
  <Admin />,
  document.getElementById('root')
);

serviceWorker.unregister();