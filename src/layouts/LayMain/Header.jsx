//基础模块
import React from 'react';


const Header = props => (
	<header className="layout-header">
		{ props.children }
	</header>
);

export default Header;