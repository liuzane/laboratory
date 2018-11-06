//基础模块
import React from 'react';

//logo
import logo from './style/logo.svg';

const Sider = props => (
	<div className="layout-sider">
    <div className="layout-sider-top">
      <img src={ logo } alt="" className="layout-sider-logo" />
      <span className="layout-sider-name">Laboratory</span>
    </div>
		{ props.children }
	</div>
);


export default Sider;