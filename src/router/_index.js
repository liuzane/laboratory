//路由视图
import RouterView from './RouterView';

//异步路由
import AsyncLoad from '@/router/config';

//引入所有路由配置
const files = require.context('.', true, /\.js$/);

//不包括以下文件
const exclude = {
  './index.js': true,
  './config.js': true,
  './RouterView.jsx': true,
};

//所有路由配置
const routes = [
  {
    path: '/login',
    strict: true,
    component: AsyncLoad(() => import('@/pages/Login')),
  },
  
  {
    path: '/main',
    title: '首页',
    strict: true,
    component: AsyncLoad(() => import('@/pages/Main')),
    children: main,
  },

  {
    path: '/',
    exact: true,
    redirect: '/main',
  },

  // 404 未找到页面
  {
    path: '',
    component: AsyncLoad(() => import('@/pages/NotFound')),
  },
];

const handleRoutes = (routes, parentPath) => {
  return routes.map(route => {
    if (parentPath && route.path.substr(0, 1) !== '/') route.path = parentPath + (route.path === '' ? '' : '/' + route.path);
    if (route.children) handleRoutes(route.children, route.path);
    return route;
  });
};

export default handleRoutes(routes);

//路由视图
export { 
  RouterView, 
  main,
};
// export * as RouterView from './RouterView';