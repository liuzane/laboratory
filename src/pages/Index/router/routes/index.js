// 异步路由
import { AsyncLoad } from '@/router';

// Main 路由配置
import main from './main';

export default [
  {
    path: '/main',
    strict: true,
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
    component: AsyncLoad(() => import('@/components/NotFound')),
  },
];