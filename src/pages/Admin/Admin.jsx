// 基础模块
import React, { Component } from 'react';

// 路由配置
import { goto, getUrlPath } from '@/router';

// 第三方模块
import { fromJS, is } from 'immutable';

// 方法
import { getCookie } from '@/utils/cookie';

// 样式
import './style/Admin.less';

// 公共组件
import ScreenLoading from '@/components/ScreenLoading';


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    this.updateUserInfo();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
  }

  updateUserInfo = async () => {
    const id = getCookie('token');

    if (id) {
      const waiting = () => {
        return new Promise(function(resolve, reject) {
          setTimeout(() => {
            resolve();
          }, 1500);
        });
      };
      this.setState({ loading: true });
      await waiting();
      this.setState({ loading: false });
    } else {
      const url = getUrlPath();
      goto('/login.html' + url);
    }
  };

  render() {
    return (
      <div>
        <ScreenLoading loading={ this.state.loading } />
        <h1 className="admin">Admin</h1>
      </div>
    );
  }
}

export default Admin;