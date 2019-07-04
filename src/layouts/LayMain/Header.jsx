// 基础模块
import React from 'react';

const headerClassName = function (postfix = '', ...className) {
  if (className.length > 0) {
    className = className.filter(item => item);
    if (className.length > 0) {
      className = ' ' + className.join(' ');
    }
  } else {
    className = '';
  }
  
  return 'layout-header' + postfix + className;
};


const Header = props => (
  <header
    className={ headerClassName('', props.className) }
    style={ props.style }
  >
    { props.children }
  </header>
);

export default Header;