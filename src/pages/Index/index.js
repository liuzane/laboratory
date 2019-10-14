// service worker
import * as serviceWorker from '@/serviceWorker';

// 基础模块
import React from 'react';
import ReactDOM from 'react-dom';

// 入口组件
import Index from './Index.jsx';

// 全局样式
import '@/styles';

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);

serviceWorker.unregister();