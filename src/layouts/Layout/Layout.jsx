//基础模块
import React from 'react';

//样式
import './style/Layout.css';

const Layout = props => (
  <article className="layout">
    { props.children }
  </article>
);

export default Layout;