//service worker
import * as serviceWorker from './serviceWorker';

//基础模块
import React from 'react';
import ReactDOM from 'react-dom';

//Redux状态库
import { Provider } from 'react-redux';
import store from './store';

//入口组件
import App from './App';

//原型链方法
import './utils/prototype';


ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, 
  document.getElementById('root')
);

serviceWorker.unregister();