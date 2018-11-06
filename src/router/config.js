//基础模块
import React from 'react';

//第三方模块
import Loadable from 'react-loadable';

//公共组件
import Loading from '@/components/Loading';

//Loading
const loading = props => {
  if (props.error) {
    return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
  } else if (props.pastDelay) {
    return (<Loading fix loading></Loading>);
  } else {
    return null;
  }
};

//异步加载
const AsyncLoad = loader => Loadable({ loader, loading });

export default AsyncLoad;