// 异步路由
import handleRoutes, { AsyncLoad } from '@/router';

const children = [
  {
    path: 'home',
    title: 'routes.home',
    icon: 'icon-home',
    component: AsyncLoad(() => import('@/pages/Index/views/Home')),
    exact: true,
  },

  {
    path: 'todo',
    title: 'routes.todo',
    icon: 'icon-todo',
    component: AsyncLoad(() => import('@/pages/Index/views/Todo')),
    exact: true,
  },

  {
    path: 'count-table',
    title: 'routes.count-table',
    icon: 'icon-table',
    component: AsyncLoad(() => import('@/pages/Index/views/CountTable')),
    exact: true,
  },

  {
    path: 'less',
    title: 'routes.less',
    icon: 'icon-less',
    component: AsyncLoad(() => import('@/pages/Index/views/Less')),
    exact: true,
  },

  {
    path: 'module',
    title: 'routes.module',
    icon: 'icon-module',
    component: AsyncLoad(() => import('@/pages/Index/views/Module')),
    exact: true,
  },

  {
    path: 'grammar',
    title: 'routes.grammar',
    icon: 'icon-grammar',
    component: AsyncLoad(() => import('@/pages/Index/views/Grammar')),
    exact: true,
  },

  {
    path: 'animation',
    title: 'routes.animation',
    icon: 'icon-animation',
    component: AsyncLoad(() => import('@/pages/Index/views/Animation')),
    exact: true,
  },

  {
    path: 'svg',
    title: 'routes.svg',
    icon: 'icon-svg',
    component: AsyncLoad(() => import('@/pages/Index/views/Svg')),
    exact: true,
  },

  {
    path: 'iframe',
    title: 'routes.iframe',
    icon: 'icon-iframe',
    component: AsyncLoad(() => import('@/pages/Index/views/Iframe')),
    exact: true,
  },

  {
    path: 'validate',
    title: 'routes.validate',
    icon: 'icon-svg',
    component: AsyncLoad(() => import('@/pages/Index/views/Validate')),
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
    component: AsyncLoad(() => import('@/pages/Index/Main')),
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
    component: AsyncLoad(() => import('@/components/NotFound')),
  },
];


export default handleRoutes(routes);