//基础模块
import React, { PureComponent } from 'react';

//路由模块
import { HashRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

//路由配置
import routes, { RouterView } from '@/router';

//第三方模块
import NProgress from 'nprogress';

//全局样式
import '@/styles';
import 'nprogress/nprogress.css';

import { languages } from '@/language';

import one from 'one';

console.log(languages, one, 20);



class App extends PureComponent {
	onBeforeEach = (to, from, history) => {
	  console.log('app', to, from);
    NProgress.start();
	};
  
  onAfterEach = (to, from, history) => {
    // setTimeout(NProgress.done, 300);
    NProgress.done();
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
};

export default App;