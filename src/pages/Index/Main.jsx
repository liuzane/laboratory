// 基础模块
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';



// 路由配置
import { RouterView, goto, getCurrentUrlPath } from '@/router';
import routes from './router';

// 第三方模块
import { fromJS, is } from 'immutable';

// 方法
import { getCookie } from '@/utils/cookie';

// 布局组件
import LayMain from '@/layouts/LayMain';

// 公共组件
import ScreenLoading from '@/components/ScreenLoading';

// 组件
import MainMenu from './MainMenu';
import MainHeader from './MainHeader';

// 样式
import './style/Main.less';

const { Content } = LayMain;


class Main extends Component {
  static propTypes = {
    // Dispatch
    getUserInfo: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
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
      const url = getCurrentUrlPath();
      goto('/login.html' + url);
    }
  };

  render() {
    const { loading } = this.state;
    return (
      <Fragment>
        <ScreenLoading loading={ loading } />
        <LayMain>
          <MainMenu />
    
          <LayMain>
            <MainHeader />
      
            <Content>
              { loading ? null : (<RouterView routes={ routes } />) }
            </Content>
          </LayMain>
        </LayMain>
      </Fragment>
    );
  }
}

// Dispatch
const mapDispatchToProps = ({ user }) => ({
  getUserInfo: user.getUserInfo
});

export default connect(
  null,
  mapDispatchToProps
)(Main);