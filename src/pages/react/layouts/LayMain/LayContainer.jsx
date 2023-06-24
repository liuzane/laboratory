// 基础模块
import React, { memo } from 'react';

// 第三方模块
import classnames from 'classnames';


const LayContainer = props => (
  <div
    className={ classnames('layout-container', props.className) }
    style={ props.style }
  >
    <div
      className={ classnames('layout-content', props.contentClassName) }
      style={ props.contentStyle }
    >
      { props.children }
    </div>
  </div>
);

export default memo(LayContainer);