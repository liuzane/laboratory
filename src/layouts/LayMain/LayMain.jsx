//基础模块
import React from 'react';

//样式
import './style/LayMain.css';

const mainClassName = 'layout';

const LayMain = props => {
  const wrapperClassName = `${ mainClassName } ${ props.className }`;
  
  return (
    <article className={ wrapperClassName }>
      { props.children }
    </article>
  )
};

export default LayMain;