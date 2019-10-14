// 基础模块
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// 路由模块
import { withRouter } from 'react-router-dom';

// 路由配置
import { RouterView, goto, getCurrentUrlPath } from '@/router';

// 第三方模块
import { fromJS, is } from 'immutable';
import _ from 'lodash';

// 方法
import { getCookie } from '@/utils/cookie';

// 多语言配置组件
import Languages, {languages} from '../languages';

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
    // Props
    routes: PropTypes.array,
    history: PropTypes.object,
    match: PropTypes.object,
  };

  constructor(props) {
    super(props);
    const { match } = props;
    const browserLanguage = window.navigator.language.toLocaleLowerCase();
    const matchLanguage = match.params.language;
    this.language = languages[matchLanguage] ? matchLanguage : languages[browserLanguage] ? browserLanguage : Object.keys(languages)[0];
    this.menu = _.cloneDeep(props.routes)
      .filter(item => item.title)
      .map(item => ({
        ...item,
        path: item.path.replace(':language', this.language)
      }));
    this.state = { loading: true };
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

  onRouterEach = (to, from, history) => {
    if (typeof to.pathname === 'string' && to.pathname.search(':language') > -1) {
      history.replace(to.pathname.replace(':language', this.language));
    }
  };

  render() {
    const { language, menu } = this;
    const { routes } = this.props;
    const { loading } = this.state;

    return (
      <Languages language={ language }>
        <Fragment>
          <ScreenLoading loading={ loading } />
          <LayMain>
            <MainMenu menu={ menu } />

            <LayMain>
              <MainHeader language={ language } />

              <Content>
                { loading ? null : <RouterView routes={ routes } onRouterEach={ this.onRouterEach } /> }
              </Content>
            </LayMain>
          </LayMain>
        </Fragment>
      </Languages>
    );
  }
}

const RouterMain = withRouter(Main);

// Dispatch
const mapDispatchToProps = ({ user }) => ({
  getUserInfo: user.getUserInfo,
});

export default connect(
  null,
  mapDispatchToProps
)(RouterMain);