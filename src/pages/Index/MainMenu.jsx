// 基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 路由模块
import { withRouter } from 'react-router-dom';

// 路由配置
import { menu } from './router';

// 第三方模块
import { fromJS, is } from 'immutable';
import _ from 'lodash';

// 布局组件
import LayMain from '@/layouts/LayMain';

// 多语言组件
import { FormattedMessage } from 'react-intl';

// 公共组件
import IconFont from '@/components/IconFont';

// UI组件
import { Menu } from 'antd';

const { Sider } = LayMain;
const { SubMenu, Item } = Menu;


class MainMenu extends Component {
  static propTypes = {
    // Props
    history: PropTypes.object,
    match: PropTypes.object,
    location: PropTypes.object,
  };

  constructor(props) {
    super(props);
    const { match } = props;
    const language = match.params.language || 'en';
    this.menuRoutes = _.cloneDeep(menu).filter(item => item.title).map(item => {
      item.path = item.path.replace(':language', language);
      return item;
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
  }

  goto = item => {
    this.props.history.push(item.key);
  };

  render() {
    const { menuRoutes } = this;
    console.log('menuRoutes', menuRoutes);
    const pathname = this.props.location.pathname;
    const currentPathName = menuRoutes.some(item => item.path === pathname) ? pathname : menuRoutes[0].path;

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
            menuRoutes.map(item => {
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

export default withRouter(MainMenu);