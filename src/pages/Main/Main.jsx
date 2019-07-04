// 基础模块
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// 路由配置
import { RouterView, main } from '@/router';

// 第三方模块
import { fromJS, is } from 'immutable';

// 方法
import { getCookie } from '@/utils/cookie';

// 样式
import './style/Main.css';

// 布局组件
import LayLoading from '@/layouts/LayLoading';
import LayMain from '@/layouts/LayMain';

// 组件
import MainMenu from './MainMenu';
import MainHeader from './MainHeader';

const { Content } = LayMain;


class Main extends Component {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
  };
  
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  };

  componentDidMount() {
    this.updateUserInfo();
  };

  shouldComponentUpdate(nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
  };
  
  updateUserInfo = async () => {
    const { history, getUserInfo } = this.props;
    const id = getCookie('token');

    if (id) {
      this.setState({ loading: true });
      await getUserInfo({ id });
      this.setState({ loading: false });
    } else {
      history.push('/login');
    }
  };

  render() {
    const { history, location } = this.props;
    
    return (
      <Fragment>
        <LayLoading loading={ this.state.loading } />
        <LayMain>
          <MainMenu
            history={ history }
            location={ location }
          />
    
          <LayMain>
            <MainHeader history={ history } />
      
            <Content>
              <RouterView routes={ main } />
            </Content>
          </LayMain>
        </LayMain>
      </Fragment>
    );
  };
}

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