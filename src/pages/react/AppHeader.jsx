// 基础模块
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// 路由模块
import { withRouter } from 'react-router-dom';

// 路由跳转方法
import { goto } from './router';

// 第三方模块
import { fromJS, is } from 'immutable';

// 方法
import { clearCookie } from '@/utils/cookie';
import { clearStorage } from '@/utils/local-storage';

// 多语言列表
import { languages } from './languages';

// 布局组件
import { LayHeader } from './layouts/LayMain';

// 多语言组件
import { injectIntl, FormattedMessage } from 'react-intl';

// UI组件库
import { Dropdown, Menu, Button, Modal, Breadcrumb } from 'antd';
import { UserOutlined, UnlockOutlined, PoweroffOutlined, CaretDownOutlined } from '@ant-design/icons';


class AppHeader extends PureComponent {
  static propTypes = {
    // State
    username: PropTypes.string,
    // Dispatch
    resetUser: PropTypes.func,
    // Props
    language: PropTypes.string,
    intl: PropTypes.object,
    location: PropTypes.object,
    routeInfo: PropTypes.object,
  };

  constructor(props) {
    super(props);
    const { language } = props;
    const currentLanguage = languages.find(item => item.code === language);
    if (currentLanguage) {
      this.languageKey = currentLanguage.code;
      this.languageName = currentLanguage.name;
    }
  }

  // 切换语言并保存到本地
  handleLanguage = ({ item, key, keyPath }) => {
    const { history, location, match } = this.props;
    const beforeUrl = match.url;
    const afterUrl = match.path.replace(':language', key);
    const url = location.pathname.replace(beforeUrl, afterUrl);
    history.push(url);
    window.location.reload();
  };

  // 处理用户行为
  handleUser = ({ item, key, keyPath }) => {
    const { resetUser } = this.props;
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
            resetUser();
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
          <UserOutlined className="app__menu-icon" />
          <FormattedMessage id="main.header.personalInfo" />
        </Menu.Item>

        <Menu.Item key="password">
          <UnlockOutlined className="app__menu-icon" />
          <FormattedMessage id="main.header.changePassword" />
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item className="app__logout" key="logout">
          <PoweroffOutlined className="app__menu-icon" />
          <FormattedMessage id="main.header.logout" />
        </Menu.Item>
      </Menu>
    );
  }

  // 渲染多语言下拉列表
  renderLanguageMenu() {
    return (
      <Menu
        defaultSelectedKeys={[ this.languageKey ]}
        onClick={ this.handleLanguage }
        selectedKeys={[ this.languageKey ]}
      >
        {
          languages.map(lang => (
            <Menu.Item key={ lang.code }>
              <span>{ lang.name }</span>
            </Menu.Item>
          ))
        }
      </Menu>
    );
  }
  
  render() {
    const { username, routeInfo } = this.props;
    let breadcrumbs = [];
    if (routeInfo.pathRoutes) {
      breadcrumbs = routeInfo.pathRoutes;
    }

    return (
      <LayHeader className="app__header">
        {
          routeInfo.lastKey === '/:language/home' ? (
            <h2 className="app__title">
              <FormattedMessage id="main.header.title" />
            </h2>
          ) : (
            <div className="app__breadcrumb">
              <Breadcrumb>
                {
                  breadcrumbs.map(route => (
                    <Breadcrumb.Item key={route.path}>
                      <FormattedMessage id={route.title} />
                    </Breadcrumb.Item>
                  ))
                }
              </Breadcrumb>
              <h3 className="app__breadcrumb-name">
                {
                  routeInfo.pathRoutes ? (
                    <FormattedMessage id={breadcrumbs[breadcrumbs.length - 1].title} />
                  ) : null
                }
              </h3>
            </div>
          )
        }
        
        <Dropdown
          className="app__dropdown"
          overlay={ this.renderLanguageMenu.bind(this) }
          placement="bottom"
        >
          <div className="app__dropdown-title">
            <Button size="small">{ this.languageName }</Button>
          </div>
        </Dropdown>

        <Dropdown
          className="app__dropdown"
          overlay={ this.renderUserMenu.bind(this) }
          placement="bottom"
        >
          <div className="app__dropdown-title">
            <span className="app__dropdown-title-text">{ username }</span>
            <CaretDownOutlined style={{ color: 'rgba(0, 0, 0, .5)' }} />
          </div>
        </Dropdown>
      </LayHeader>
    );
  }
}

const IntlMainHeader = injectIntl(AppHeader);

const RouterHeader = withRouter(IntlMainHeader);

// State
const mapStateToProps = ({ user }) => ({
  username: user.name,
});

// Dispatch
const mapDispatchToProps = ({ user }) => ({
  resetUser: user.resetUser,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouterHeader);