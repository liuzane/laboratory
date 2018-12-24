//基础模块
import React from 'react';

//logo
import logo from './style/logo.svg';

const siderClassName = 'layout-sider';

const Sider = props => {
  const wrapperClassName = `${ siderClassName } ${ props.className }`;
  
  return (
    <div className={ wrapperClassName.trim() }>
      <div className={ `${ siderClassName }__top` }>
        <img src={ logo } alt="" className={ `${ siderClassName }__logo` } />
        <span className={ `${ siderClassName }__name` }>Laboratory</span>
      </div>
      { props.children }
    </div>
  );
};


export default Sider;