//异步路由
import AsyncLoad from '@/router/config';

export default [
  {
    path: '/home',
    title: 'home',
    component: AsyncLoad(() => import('@/pages/Main/Home')),
    exact: true,
  },

  {
    path: '/home/todo',
    title: 'todo',
    component: AsyncLoad(() => import('@/pages/Main/Todo')),
    exact: true,
  },
];