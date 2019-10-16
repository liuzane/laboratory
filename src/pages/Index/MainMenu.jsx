// 基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 路由模块
import { withRouter } from 'react-router-dom';

// 第三方模块
import { fromJS, is } from 'immutable';

// 布局组件
import { LaySider } from '@/layouts/LayMain';

// 多语言组件
import { FormattedMessage } from 'react-intl';

// 公共组件
import IconFont from '@/components/IconFont';

// UI组件
import { Menu } from 'antd';

const { SubMenu, Item } = Menu;


class MainMenu extends Component {
  static propTypes = {
    // Props
    menu: PropTypes.array,
    history: PropTypes.object,
    location: PropTypes.object,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
  }

  goto = item => {
    this.props.history.push(item.key);
  };

  render() {
    const { menu, location } = this.props;
    const pathname = location.pathname;
    const currentPathName = menu.some(item => item.path === pathname) ? pathname : menu[0].path;

    return (
      <LaySider>
        <Menu
          defaultOpenKeys={[ currentPathName ]}
          defaultSelectedKeys={[ currentPathName ]}
          mode="inline"
          onSelect={ this.goto }
          theme="dark"
        >
          {
            menu.map(item => {
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
      </LaySider>
    );
  }
}

export default withRouter(MainMenu);