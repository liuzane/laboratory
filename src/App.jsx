// 基础模块
import React, { PureComponent } from 'react';

// 路由模块
import { HashRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

// 路由配置
import routes, { RouterView } from '@/router';

// 方法
import { getCookie } from '@/utils/cookie';

// 全局样式
import '@/styles';

class App extends PureComponent {
  onRouterEach = (to, from, history) => {
    const token = getCookie('token');

    if (!token) history.push('/login');
  };

  render() {
    return (
      <Router>
        <RouterView
          onRouterEach={ this.onRouterEach }
          routes={ routes }
        />
      </Router>
    );
  }
}

export default App;