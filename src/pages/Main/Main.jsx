//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//路由配置
import { RouterView, main } from '@/router';

//第三方模块
import { fromJS, is } from 'immutable';

//多语言列表
// import * as languages from '@/language';

//布局组件
import Layout from '@/layouts/Layout';

//UI组件库
import { Menu, Icon } from 'antd';

const { Sider, Header, Content } = Layout;
const { SubMenu, Item } = Menu;
// console.log(languages, 23);

class Main extends Component {
  static propTypes = {
    id: PropTypes.string,
    username: PropTypes.string,
    update_user: PropTypes.func,
  };
  
  constructor (props) {
    super(props);
    this.state = {
      loading: false,
    };
  };

  componentWillMount () {
    const { update_user } = this.props;
    update_user({ id: '1', username: 'admin' });
    // console.log('Main', id, username);
    setTimeout(() => {
      // const screenLoading = document.getElementById('screen-loading');
      // if (screenLoading) {
      //   document.body.removeChild(screenLoading);
      // }
      // this.setState({ loading: false });
    }, 3000);
  };

  shouldComponentUpdate (nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
  };

  goto = item => {
    this.props.history.push(item.key);
  };

  render () {
    const currentPathName = this.props.location.pathname;

    return this.state.loading ? null : (
      <Layout>
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

const mapStateToProps = state => {
  const { id, username } = state.user;
  return {
    id,
    username,
  };
};

const mapDispatchToProps = dispatch => {
  const { update_user } = dispatch.user;
  return {
    update_user,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);