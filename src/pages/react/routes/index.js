// 异步路由
import handleRoutes, { AsyncLoad } from '../router';

const children = [
  {
    path: 'home',
    title: 'routes.home',
    icon: 'icon-home',
    component: AsyncLoad(() => import('@~react/views/Home')),
    exact: true,
  },

  {
    path: 'todo',
    title: 'routes.todo',
    icon: 'icon-todo',
    component: AsyncLoad(() => import('@~react/views/Todo')),
    exact: true,
  },

  {
    path: 'count-table',
    title: 'routes.count-table',
    icon: 'icon-table',
    component: AsyncLoad(() => import('@~react/views/CountTable')),
    exact: true,
  },

  {
    path: 'less',
    title: 'routes.less',
    icon: 'icon-less',
    component: AsyncLoad(() => import('@~react/views/Less')),
    exact: true,
  },

  {
    path: 'module',
    title: 'routes.module',
    icon: 'icon-module',
    component: AsyncLoad(() => import('@~react/views/Module')),
    exact: true,
  },

  {
    path: 'grammar',
    title: 'routes.grammar',
    icon: 'icon-grammar',
    component: AsyncLoad(() => import('@~react/views/Grammar')),
    exact: true,
  },

  {
    path: 'animation',
    title: 'routes.animation',
    icon: 'icon-animation',
    component: AsyncLoad(() => import('@~react/views/Animation')),
    exact: true,
  },

  {
    path: 'svg',
    title: 'routes.svg',
    icon: 'icon-svg',
    component: AsyncLoad(() => import('@~react/views/Svg')),
    exact: true,
  },

  {
    path: 'iframe',
    title: 'routes.iframe',
    icon: 'icon-iframe',
    component: AsyncLoad(() => import('@~react/views/Iframe')),
    exact: true,
  },

  {
    path: 'validate',
    title: 'routes.validate',
    icon: 'icon-svg',
    component: AsyncLoad(() => import('@~react/views/Validate')),
    exact: true,
  },

  {
    path: 'rc-table',
    title: 'routes.rc-table',
    icon: 'icon-svg',
    component: AsyncLoad(() => import('@~react/views/RcTable')),
    exact: true,
  },

  {
    path: '',
    redirect: 'home',
    exact: true,
  },
];

const routes = [
  {
    path: '/:language',
    component: AsyncLoad(() => import('@~react/App')),
    children,
  },

  {
    path: '/',
    redirect: '/:language',
    exact: true,
  },

  // 404 未找到页面
  {
    path: '',
    component: AsyncLoad(() => import('../components/NotFound')),
  },
];


export default handleRoutes(routes);