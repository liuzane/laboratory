// 基础模块
import React from 'react';

// logo
import logo from './style/logo.svg';

const siderClassName = function (postfix = '', ...className) {
  if (className.length > 0) {
    className = className.filter(item => item);
    if (className.length > 0) {
      className = ' ' + className.join(' ');
    }
  } else {
    className = '';
  }
  
  return 'layout-sider' + postfix + className;
};


const Sider = props => {
  return (
    <div
      className={ siderClassName('', props.className) }
      style={ props.style }
    >
      <div className={ siderClassName('__top') }>
        <img alt="" className={ siderClassName('__logo') }
src={ logo }
        />
        <span className={ siderClassName('__name') }>Laboratory</span>
      </div>
      { props.children }
    </div>
  );
};


export default Sider;