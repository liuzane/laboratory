//基础模块
import React from 'react';

const headerClassName = 'layout-header';

const Header = props => {
  const wrapperClassName = `${ headerClassName } ${ props.className }`;
  
  return (
    <header className={ wrapperClassName }>
      { props.children }
    </header>
  );
};

export default Header;