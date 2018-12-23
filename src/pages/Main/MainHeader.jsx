//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//第三方模块
import { fromJS, is } from 'immutable';

//多语言列表
import { languages } from '@/language';

//布局组件
import LayMain from '@/layouts/LayMain';

//UI组件库
import { Menu, Dropdown, Icon } from 'antd';

const { Header } = LayMain;
console.log('languages', languages);

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Icon type="user" />
      <span className="main__text">个人信息</span>
    </Menu.Item>
    
    <Menu.Item key="1">
      <Icon type="unlock" />
      <span className="main__text">修改密码</span>
    </Menu.Item>
    
    <Menu.Divider />
    
    <Menu.Item key="3">
      <Icon type="poweroff" />
      <span className="main__text">注销</span>
      </Menu.Item>
  </Menu>
);

class MainHeader extends Component {
  static propTypes = {
    //Store
    id: PropTypes.string,
    username: PropTypes.string,
    getUserInfo: PropTypes.func,
  };
  
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  };
  
  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
  };
  
  render() {
    // const { history, location } = this.props;
    
    return (
      <Header>
        <Dropdown overlay={ menu } className="main__dropdown">
          <span className="main__text">
            Mr.Liu
            <Icon type="down" />
          </span>
        </Dropdown>
      </Header>
    );
  };
}

const mapStateToProps = state => {
  const { id, username } = state.user;
  return {
    id,
    username,
  };
};

const mapDispatchToProps = dispatch => {
  const { getUserInfo } = dispatch.user;
  return {
    getUserInfo,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainHeader);