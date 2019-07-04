// 异步路由
import AsyncLoad from '@/router/config';

// 所有路由配置
const common = [
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

export default common;

