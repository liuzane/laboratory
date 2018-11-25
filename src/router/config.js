//基础模块
import React from 'react';

//第三方模块
import Loadable from 'react-loadable';

//Loading
const loading = props => {
  if (props.error) {
    return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
  } else {
    return null;
  }
};


//异步加载
const AsyncLoad = loader => Loadable({ loader, loading });

export default AsyncLoad;