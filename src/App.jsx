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
	onBeforeEach = (to, from, history) => {
    const token = getCookie('token');

    if (!token) history.push('/login');
	};
  
  onAfterEach = (to, from, history) => {
  
  };

  render() {
    return (
      <Router>
        <RouterView 
        	routes={ routes } 
        	onBeforeEach={ this.onBeforeEach }
          onAfterEach={ this.onAfterEach }
        />
      </Router>
    );
  };
}

export default App;