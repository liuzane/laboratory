//基础模块
import React from 'react';

//第三方模块
import Loadable from 'react-loadable';
import NProgress from 'nprogress';

//Loading
const loading = props => {
  if (props.error) {
    NProgress.done();
    return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
  } else if (props.pastDelay) {
    NProgress.start();
    return <div>Loading...</div>;
  } else {
    NProgress.done();
    return null;
  }
};


//异步加载
const AsyncLoad = loader => Loadable({ loader, loading });

export default AsyncLoad;