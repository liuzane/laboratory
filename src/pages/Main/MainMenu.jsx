//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//路由配置
import { main } from '@/router';

//第三方模块
import { fromJS, is } from 'immutable';

//布局组件
import LayMain from '@/layouts/LayMain';

//UI组件
import { Menu, Icon } from 'antd';

const { Sider } = LayMain;
const { SubMenu, Item } = Menu;


class MainHeader extends Component {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
  };

  shouldComponentUpdate (nextProps) {
    return !is(fromJS(this.props), fromJS(nextProps));
  };

  goto = item => {
    this.props.history.push(item.key);
  };

  render () {
    const currentPathName = this.props.location.pathname;

    return (
      <Sider>
        <Menu
          defaultSelectedKeys={[ currentPathName ]}
          defaultOpenKeys={[ currentPathName ]}
          mode="inline"
          theme="dark"
          onSelect={ this.goto }
        >
          {
            main.map(item => {
              if (item.children) {
                return (
                  <SubMenu
                    key={ item.path }
                    title={
                      <span>
                          <Icon type="desktop" />
                          <span>{ item.title }</span>
                        </span>
                    }
                  >
                    {
                      item.children.map(child => (<Item key={ child.path }>{ child.title }</Item>))
                    }
                  </SubMenu>
                )
              } else {
                return (<Item key={ item.path }>{ item.title }</Item>);
              }
            })
          }
        </Menu>
      </Sider>
    );
  };
}

export default MainHeader;