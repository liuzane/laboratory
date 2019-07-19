// 异步路由
import { AsyncLoad } from '@/router';

export default [
  {
    path: '',
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
    path: 'table',
    title: 'routes.table',
    icon: 'icon-table',
    component: AsyncLoad(() => import('@/pages/Index/views/Table')),
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
];