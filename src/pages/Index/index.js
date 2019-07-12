// service worker
import * as serviceWorker from '@/serviceWorker';

// 基础模块
import React from 'react';
import ReactDOM from 'react-dom';

// 全局样式
import '@/styles';

// 入口组件
import Main from './Main';

// Redux状态库
import { Provider } from 'react-redux';
import store from './store';

// 多语言配置组件
import Languages from './languages';

ReactDOM.render(
  <Provider store={ store }>
    <Languages>
      <Main />
    </Languages>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

// const targetPath = '/login.html?url=123';
//
// const pathname01 = '/react-lab/';
// const pathname02 = '/react-lab/index';
// const pathname03 = '/react-lab/index.html';
// const pathname04 = '/';
// const pathname05 = '/index';
// const pathname06 = '/index.html';
//
// const replacePath = (pathname) => {
//   const matchPath = pathname.match(/\/[a-zA-Z0-9\\._-]{0,}$/);
//
//   if (matchPath) {
//     const frontPath = pathname.substring(0, pathname.lastIndexOf(matchPath[0]));
//
//     return frontPath + targetPath;
//   } else {
//     return pathname + targetPath;
//   }
// };
//
// console.log('pathname01', replacePath(pathname01));
// console.log('pathname02', replacePath(pathname02));
// console.log('pathname03', replacePath(pathname03));
// console.log('pathname04', replacePath(pathname04));
// console.log('pathname05', replacePath(pathname05));
// console.log('pathname06', replacePath(pathname06));