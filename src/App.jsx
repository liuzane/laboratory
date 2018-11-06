//基础模块
import React, { PureComponent } from 'react';

//路由模块
import { HashRouter as Router } from 'react-router-dom';

//路由配置
import routes, { RouterView } from '@/router';

//全局样式
import '@/styles';


class App extends PureComponent {
	onBeforeEach = (to, from, history) => {
		//全局路由监听
	};

  render() {
    return (
      <Router>
        <RouterView 
        	routes={ routes } 
        	onBeforeEach={ this.onBeforeEach }
        />
      </Router>
    );
  };
};

export default App;