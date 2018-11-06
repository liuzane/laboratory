//基础模块
import React, { Component } from 'react';

//路由配置
import { RouterView, main } from '@/router';

//第三方模块
import { fromJS, is } from 'immutable';
import { dispatch, getState } from '@/store';

//布局组件
import Layout from '@/layouts/Layout';

//UI组件库
import { Menu, Icon } from 'antd';

const { Sider, Header, Content } = Layout;
const { SubMenu, Item } = Menu;


class Main extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  };

  componentWillMount () {
    dispatch.user.update_user({ id: 1, username: 'admin' });
    console.log(getState(), 23);
  };

  shouldComponentUpdate (nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
  };

  goto = item => {
    console.log(item, this.props);
    this.props.history.push(item.key);
  };

  render () {
    return (
      <Layout>
        <Sider>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
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

        <Layout>
          <Header>
            header
          </Header>

          <Content>
            <RouterView routes={ main } />
          </Content>
        </Layout>
      </Layout>
    );
  };
};

export default Main;