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


const LanguageMenu = language => (
  <Menu defaultSelectedKeys={[ language ]}>
    {
      Object.keys(languages).map(key => {
        const item = languages[key];

        return (
          <Menu.Item key={ key }>
            <span>{ item.name }</span>
          </Menu.Item>
        );
      })
    }
  </Menu>
);

const UserMenu = (
  <Menu>
    <Menu.Item key="0">
      <Icon type="user" />
      <span>个人信息</span>
    </Menu.Item>
    
    <Menu.Item key="1">
      <Icon type="unlock" />
      <span>修改密码</span>
    </Menu.Item>
    
    <Menu.Divider />
    
    <Menu.Item key="3">
      <Icon type="poweroff" />
      <span>注销</span>
      </Menu.Item>
  </Menu>
);

class MainHeader extends Component {
  static propTypes = {
    //Store
    language: PropTypes.string,
    username: PropTypes.string,
  };
  
  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
  };
  
  render() {
    const { language, username } = this.props;
    
    return (
      <Header>
        <Dropdown
          overlay={ LanguageMenu(language) }
          placement="bottomCenter"
          className="main__dropdown"
        >
          <div className="main__dropdown-title">
            <span className="main__dropdown-title-text">语言</span>
            <Icon type="down" />
          </div>
        </Dropdown>
        
        <Dropdown
          overlay={ UserMenu }
          placement="bottomCenter"
          className="main__dropdown"
        >
          <div className="main__dropdown-title">
            <span className="main__dropdown-title-text">{ username }</span>
            <Icon type="down" />
          </div>
        </Dropdown>
      </Header>
    );
  };
}

const mapStateToProps = state => ({
  language: state.user.language,
  username: state.user.username,
});

const mapDispatchToProps = dispatch => ({
  update_user: dispatch.user.dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainHeader);