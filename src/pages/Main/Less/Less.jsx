// 基础模块
import React, { Component } from 'react';

// 第三方模块
import { fromJS, is } from 'immutable';

import { Button } from 'antd';

// 样式
// import styled from './style/Css.module.css';
// import styled from './style/Scss.scss';
import './style/Less.less';
// import styled from './style/Css.css';

class Less extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
  };

  render() {
    return (
      <div className="box">
        Less
        <Button type="primary">Button</Button>
      </div>
    );
  };
}

export default Less;