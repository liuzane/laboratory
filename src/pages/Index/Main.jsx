// 基础模块
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// 路由模块
import { HashRouter as Router } from 'react-router-dom';

// 路由配置
import { RouterView, history, goto, getUrlPath } from '@/router';
import routes from './router';

// 第三方模块
import { fromJS, is } from 'immutable';

// 方法
import { getCookie } from '@/utils/cookie';

// 样式
import './style/Main.less';

// 布局组件
import LayMain from '@/layouts/LayMain';

// 公共组件
import ScreenLoading from '@/components/ScreenLoading';

// 组件
import MainMenu from './MainMenu';
import MainHeader from './MainHeader';

const { Content } = LayMain;


class Main extends Component {
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
    const { getUserInfo } = this.props;
    const id = getCookie('token');

    if (id) {
      this.setState({ loading: true });
      await getUserInfo({ id });
      this.setState({ loading: false });
    } else {
      const url = getUrlPath();

      goto('/login.html' + url);
    }
  };

  render() {
    return (
      <Fragment>
        <ScreenLoading loading={ this.state.loading } />
        <LayMain>
          <MainMenu history={ history } />
    
          <LayMain>
            <MainHeader />
      
            <Content>
              <Router>
                <RouterView routes={ routes } />
              </Router>
            </Content>
          </LayMain>
        </LayMain>
      </Fragment>
    );
  }
}

// Redux
const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
  const { getUserInfo } = dispatch.user;

  return {
    getUserInfo,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);