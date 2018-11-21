//路由视图
import RouterView from './RouterView';

//异步路由
import AsyncLoad from '@/router/config';

//主路由配置
import main from './main';

//所有路由配置
const routes = [
  {
    path: '/login',
    strict: true,
    component: AsyncLoad(() => import('@/pages/Login')),
  },
  
  {
    path: '/',
    title: '首页',
    strict: true,
    component: AsyncLoad(() => import('@/pages/Main')),
    children: main,
  },

  // {
  //   path: '/',
  //   exact: true,
  //   redirect: '/home',
  // },

  // 404 未找到页面
  {
    component: AsyncLoad(() => import('@/layouts/NotFound')),
  },
];

export default routes;

//路由视图
export { 
  RouterView, 
  main,
};
// export * as RouterView from './RouterView';