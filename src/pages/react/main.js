// service worker
// import * as serviceWorker from '@/serviceWorker';

// 基础模块
import React from 'react';
import ReactDOM from 'react-dom';

// Redux状态库
import { Provider } from 'react-redux';
import store from './store';

// 路由模块
import { HashRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

// 路由配置
import { RouterView, routes } from './router';

// 全局样式
import '@/styles';

// serviceWorker.register();
// console.log('routes', routes);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <RouterView routes={routes} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// serviceWorker.unregister();
