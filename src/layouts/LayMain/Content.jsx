//基础模块
import React from 'react';

const contentClassName = 'layout-content';

const Content = props => {
  const wrapperClassName = `${ contentClassName } ${ props.className }`;
  
  return (
    <section className={ wrapperClassName }>
      { props.children }
    </section>
  );
};


export default Content;