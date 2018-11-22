//异步路由
import AsyncLoad from '@/router/config';

export default [
  {
    path: '',
    title: 'home',
    component: AsyncLoad(() => import('@/pages/Main/Home')),
    exact: true,
  },

  {
    path: 'todo',
    title: 'todo',
    component: AsyncLoad(() => import('@/pages/Main/Todo')),
    exact: true,
  },

  {
    path: 'count-table',
    title: 'count-table',
    component: AsyncLoad(() => import('@/pages/Main/CountTable')),
    exact: true,
  },

  {
    path: 'less',
    title: 'less',
    component: AsyncLoad(() => import('@/pages/Main/Less')),
    exact: true,
  },
  
  {
    path: 'typeof',
    title: 'typeof',
    component: AsyncLoad(() => import('@/pages/Main/Typeof')),
    exact: true,
  },
];