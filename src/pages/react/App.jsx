// 基础模块
import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// 路由模块
import { withRouter } from 'react-router-dom';

// 路由配置
import { RouterView, goto, getCurrentUrlPath, routesToMenus } from './router';

// 第三方模块
import { fromJS, is } from 'immutable';

// 方法
import { getCookie } from '@/utils/cookie';

// 多语言配置组件
import { languages } from './languages';

// 布局组件
import { LayMain, LayContent } from './layouts/LayMain';

// 公共组件
import ScreenLoading from './components/ScreenLoading';

// 组件
import AppMenu from './AppMenu';
import AppHeader from './AppHeader';

// 样式
import './style/App.less';
import { cloneDeep } from 'lodash';


class App extends PureComponent {
  static propTypes = {
    language: PropTypes.string,
    getUserInfo: PropTypes.func,
    routes: PropTypes.array,
    history: PropTypes.object,
    match: PropTypes.object,
  };

  constructor(props) {
    super(props);
    const browserLanguage = window.navigator.language.toLocaleLowerCase();
    const matchLanguage = props.match.params.language;
    // this.language = languages[matchLanguage] ? matchLanguage : languages[browserLanguage] ? browserLanguage : Object.keys(languages)[0];
    this.language = matchLanguage || browserLanguage;
    this.menu = routesToMenus(props.routes);
    this.state = {
      loading: true,
      routeInfo: {},
    };
  }

  componentDidMount() {
    this.updateUserInfo();
    const routeInfo = this.getRouteMenuInfo();
    this.setState({ routeInfo });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      const routeInfo = this.getRouteMenuInfo();
      this.setState({ routeInfo });
    }
  }

  // 获取路由菜单路径
  getRouteMenuInfo = () => {
    const { routes, match, location } = this.props;
    const pathname = location.pathname;
    const pathnames = location.pathname
      .split('/')
      .filter((name) => name)
      .map((name) => '/' + name);
    pathnames.splice(0, 1, match.path);
    const routePaths = pathnames.reduce((total, current) => {
      const lastPathname = total[total.length - 1];
      total.push(lastPathname ? lastPathname + current : current);
      return total;
    }, []);
    routePaths.splice(0, 1);
    let newRoutes = cloneDeep(routes);
    const pathRoutes = routePaths.reduce((total, pathname) => {
      const route = newRoutes.find((route) => {
        const currentRoutePath = route.path;
        if (currentRoutePath.search(':') > - 1) {
          const routePathRegexp = '^' + currentRoutePath.replace(/:[^\\/]+/g, '[^\\/]*') + '$';
          return new RegExp(routePathRegexp).test(pathname);
        } else {
          return route.path === pathname;
        }
      });
      if (route) {
        if (route.children) newRoutes = route.children;
        if (!route.hidden) newRoutes.push(route);
        return total.concat(route);
      } else {
        return total;
      }
    }, []);
    let lastChildrenKey = '';
    for (let index = pathRoutes.length - 1; index >= 0; index --) {
      const currentRoute = pathRoutes[index];
      if (currentRoute.children && currentRoute.children.length > 0) {
        lastChildrenKey = pathRoutes[index].path;
        break;
      }
    }

    return {
      routePaths,
      pathRoutes,
      lastChildrenKey,
      lastKey: routePaths[routePaths.length - 1],
    };
  };

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
    if (typeof to.pathname === 'string' && to.pathname.search(':language') > - 1) {
      history.replace(to.pathname.replace(':language', this.props.language));
    }
  };

  render() {
    const { menu } = this;
    const { language, routes } = this.props;
    const { loading, routeInfo } = this.state;

    return (
      <Fragment>
        <ScreenLoading loading={loading}/>
        <LayMain>
          <AppMenu menu={menu} routeInfo={routeInfo} />

          <LayMain>
            <AppHeader language={language} routeInfo={routeInfo} />

            <LayContent>
              {loading ? null : <RouterView routes={routes} onRouterEach={this.onRouterEach}/>}
            </LayContent>
          </LayMain>
        </LayMain>
      </Fragment>
    );
  }
}

const RouterMain = withRouter(App);

// State
const mapStateToProps = ({ user }) => ({
  language: user.language,
});

// Dispatch
const mapDispatchToProps = ({ user }) => ({
  getUserInfo: user.getUserInfo,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RouterMain);