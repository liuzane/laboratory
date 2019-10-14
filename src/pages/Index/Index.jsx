// 基础模块
import React, { PureComponent } from 'react';

// Redux状态库
import { Provider } from 'react-redux';
import store from './store';

// 路由模块
import { HashRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

// 路由配置
import { RouterView } from '@/router';
import routes from './router';


class Index extends PureComponent {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <RouterView routes={ routes } />
        </Router>
      </Provider>
    );
  }
}

export default Index;