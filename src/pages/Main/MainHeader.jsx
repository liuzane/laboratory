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

//多语言组件
import { FormattedMessage } from 'react-intl';

//UI组件库
import { Input, Dropdown, Menu, Button, Icon } from 'antd';

const { Header } = LayMain;


const LanguageMenu = (language, handleLanguage) => (
  <Menu
    defaultSelectedKeys={[ language ]}
    selectedKeys={[ language ]}
    onClick={ handleLanguage }
  >
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

const UserMenu = () => {
  return (
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
};

class MainHeader extends Component {
  static propTypes = {
    //Store
    language: PropTypes.string,
    name: PropTypes.string,
    update_user: PropTypes.func,
  };
  
  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
  };
  
  handleLanguage = ({ item, key, keyPath }) => {
    this.props.update_user({ language: key });
    window.location.reload();
  };
  
  render() {
    const { language, name } = this.props;

    return (
      <Header className="main__header">

        <h2 className="main__title">
          <FormattedMessage id="main.title" />
        </h2>
        
        <Dropdown
          overlay={ LanguageMenu(language, this.handleLanguage) }
          placement="bottomCenter"
          className="main__dropdown"
        >
          <div className="main__dropdown-title">
            <Button size="small">{ languages[ language ].name }</Button>
          </div>
        </Dropdown>
        
        <Dropdown
          overlay={ UserMenu() }
          placement="bottomCenter"
          className="main__dropdown"
        >
          <div className="main__dropdown-title">
            <span className="main__dropdown-title-text">{ name }</span>
            <Icon type="caret-down" style={{ color: 'rgba(0, 0, 0, .5)' }} />
          </div>
        </Dropdown>
      </Header>
    );
  };
}

const mapStateToProps = state => ({
  language: state.user.language,
  name: state.user.name,
});

const mapDispatchToProps = dispatch => ({
  update_user: dispatch.user.update_user,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainHeader);