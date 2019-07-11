// service worker
import * as serviceWorker from '@/serviceWorker';

// 基础模块
import React from 'react';
import ReactDOM from 'react-dom';

// 全局样式
// import '@/styles';

// 入口组件
import Login from './Login';

// 多语言配置组件
import Language from './languages';


ReactDOM.render(
  <Language>
    <Login />
  </Language>,
  document.getElementById('root')
);

serviceWorker.unregister();