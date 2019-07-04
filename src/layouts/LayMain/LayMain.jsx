// 基础模块
import React from 'react';

// 样式
import './style/LayMain.css';

const mainClassName = function (postfix = '', ...className) {
  if (className.length > 0) {
    className = className.filter(item => item);
    if (className.length > 0) {
      className = ' ' + className.join(' ');
    }
  } else {
    className = '';
  }
  
  return 'layout' + postfix + className;
};


const LayMain = props => (
  <article
    className={ mainClassName('', props.className) }
    style={ props.style }
  >
    { props.children }
  </article>
);

export default LayMain;