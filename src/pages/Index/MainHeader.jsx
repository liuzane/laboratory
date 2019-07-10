// 基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// 路由配置
import { goto } from '@/router';

// 第三方模块
import { fromJS, is } from 'immutable';

// 方法
import { clearCookie } from '@/utils/cookie';
import { getStorage, setStorage, clearStorage } from '@/utils/local-storage';

// 多语言列表
import { languages } from './languages';

// 布局组件
import LayMain from '@/layouts/LayMain';

// 多语言组件
import { injectIntl, FormattedMessage } from 'react-intl';

// UI组件库
import { Dropdown, Menu, Button, Icon, Modal } from 'antd';

const { Header } = LayMain;

// 获取存储语言信息
const language = getStorage('language');
const languageName = languages[ language ] && languages[ language ].name;


class MainHeader extends Component {
  static propTypes = {
    intl: PropTypes.object,
    // Store
    name: PropTypes.string,
    update_user: PropTypes.func,
    reset_user: PropTypes.func,
  };
  
  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
  }

  // 切换语言并保存到本地
  handleLanguage = ({ item, key, keyPath }) => {
    this.props.update_user({ language: key });
    setStorage('language', key);
    window.location.reload();
  };

  // 处理用户行为
  handleUser = ({ item, key, keyPath }) => {
    const { reset_user } = this.props;
    const { formatMessage } = this.props.intl;

    switch (key) {
      case 'userInfo':
        break;

      case 'password':
        break;

      case 'logout':
        Modal.confirm({
          centered: true,
          title: formatMessage({ id: 'main.header.logout.title' }),
          content: formatMessage({ id: 'main.header.logout.content' }),
          okText: formatMessage({ id: 'global.modal.okText' }),
          cancelText: formatMessage({ id: 'global.modal.cancelText' }),
          onOk: () => {
            clearCookie();
            clearStorage('userInfo');
            reset_user();
            goto('/login.html');
          }
        });
        break;

      default:
        break;
    }
  };

  // 渲染用户行为下拉列表
  renderUserMenu() {
    return (
      <Menu onClick={ this.handleUser }>
        <Menu.Item key="userInfo">
          <Icon type="user" />
          <FormattedMessage id="main.header.personalInfo" />
        </Menu.Item>

        <Menu.Item key="password">
          <Icon type="unlock" />
          <FormattedMessage id="main.header.changePassword" />
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item className="main__logout" key="logout">
          <Icon type="poweroff" />
          <FormattedMessage id="main.header.logout" />
        </Menu.Item>
      </Menu>
    );
  }

  // 渲染多语言下拉列表
  renderLanguageMenu() {
    return (
      <Menu
        defaultSelectedKeys={[ language ]}
        onClick={ this.handleLanguage }
        selectedKeys={[ language ]}
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
  }
  
  render() {
    const { name } = this.props;

    return (
      <Header className="main__header">
        <h2 className="main__title">
          <FormattedMessage id="main.header.title" />
        </h2>
        
        <Dropdown
          className="main__dropdown"
          overlay={ this.renderLanguageMenu.bind(this) }
          placement="bottomCenter"
        >
          <div className="main__dropdown-title">
            <Button size="small">{ languageName }</Button>
          </div>
        </Dropdown>

        <Dropdown
          className="main__dropdown"
          overlay={ this.renderUserMenu.bind(this) }
          placement="bottomCenter"
        >
          <div className="main__dropdown-title">
            <span className="main__dropdown-title-text">{ name }</span>
            <Icon style={{ color: 'rgba(0, 0, 0, .5)' }} type="caret-down" />
          </div>
        </Dropdown>
      </Header>
    );
  }
}

const IntlMainHeader = injectIntl(MainHeader);

const mapStateToProps = state => ({
  language: state.user.language,
  name: state.user.name,
});

const mapDispatchToProps = dispatch => ({
  update_user: dispatch.user.update_user,
  reset_user: dispatch.user.reset_user,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IntlMainHeader);