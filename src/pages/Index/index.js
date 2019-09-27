// service worker
import * as serviceWorker from '@/serviceWorker';

// 基础模块
import React from 'react';
import ReactDOM from 'react-dom';

// 路由模块
import { HashRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

// 入口组件
import Main from './Main';

// Redux状态库
import { Provider } from 'react-redux';
import store from './store';

// 多语言配置组件
import Languages from './languages';

// 全局样式
import '@/styles';

ReactDOM.render(
  <Router>
    <Provider store={ store }>
      <Languages>
        <Main />
      </Languages>
    </Provider>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();