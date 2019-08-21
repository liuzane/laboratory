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

serviceWorker.register({
  onUpdate: async (registration) => {
    await registration.update();
    console.info('网站更新完成, 请刷新页面');
  },
  onSuccess: () => {}
});