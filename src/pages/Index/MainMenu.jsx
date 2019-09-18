// 基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 路由模块
import { withRouter } from 'react-router-dom';

// 路由配置
import routes from './router';

// 第三方模块
import { fromJS, is } from 'immutable';

// 布局组件
import LayMain from '@/layouts/LayMain';

// 多语言组件
import { FormattedMessage } from 'react-intl';

// 公共组件
import IconFont from '@/components/IconFont';

// UI组件
import { Menu } from 'antd';

const menus = routes.filter(item => item.title);

const { Sider } = LayMain;
const { SubMenu, Item } = Menu;


class MainHeader extends Component {
  static propTypes = {
    history: PropTypes.object,
  };

  shouldComponentUpdate(nextProps) {
    return !is(fromJS(this.props), fromJS(nextProps));
  }

  goto = item => {
    this.props.history.push(item.key);
  };

  render() {
    const pathname = this.props.history.location.pathname;
    const currentPathName = menus.some(item => item.path === pathname) ? pathname : menus[0].path;

    return (
      <Sider>
        <Menu
          defaultOpenKeys={[ currentPathName ]}
          defaultSelectedKeys={[ currentPathName ]}
          mode="inline"
          onSelect={ this.goto }
          theme="dark"
        >
          {
            menus.map(item => {
              if (item.children) {
                return (
                  <SubMenu
                    key={ item.path }
                    title={
                      <span>
                        <IconFont className="menu__icon" type={ item.icon } />
                        <FormattedMessage id={ item.title } />
                      </span>
                    }
                  >
                    {
                      item.children.map(child => (
                        <Item key={ child.path }>
                          <IconFont className="menu__icon" type={ child.icon } />
                          <FormattedMessage id={ child.title } />
                        </Item>
                      ))
                    }
                  </SubMenu>
                );
              } else {
                return (
                  <Item key={ item.path }>
                    <IconFont className="menu__icon" type={ item.icon } />
                    <FormattedMessage id={ item.title } />
                  </Item>
                );
              }
            })
          }
        </Menu>
      </Sider>
    );
  }
}

export default withRouter(MainHeader);