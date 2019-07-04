// service worker
import * as serviceWorker from './serviceWorker';

// 基础模块
import React from 'react';
import ReactDOM from 'react-dom';

// Redux状态库
import { Provider } from 'react-redux';
import store from './store';

// 入口组件
import App from './App';

// 多语言
import Language from './language';


ReactDOM.render(
  <Provider store={ store }>
    <Language>
      <App />
    </Language>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();