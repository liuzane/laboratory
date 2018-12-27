//基础模块
import React from 'react';

const contentClassName = function (postfix = '', ...className) {
  if (className.length > 0) {
    className = className.filter(item => item);
    if (className.length > 0) {
      className = ' ' + className.join(' ');
    }
  } else {
    className = '';
  }
  
  return 'layout-content' + postfix + className;
};

const Content = props => (
  <section
    className={ contentClassName('', props.className) }
    style={ props.className }
  >
    { props.children }
  </section>
);


export default Content;