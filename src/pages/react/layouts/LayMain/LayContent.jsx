// 基础模块
import React, { memo } from 'react';

// 第三方模块
import classnames from 'classnames';


const LayContent = props => (
  <section
    className={ classnames('layout-content', props.className) }
    style={ props.style }
  >
    { props.children }
  </section>
);

export default memo(LayContent);