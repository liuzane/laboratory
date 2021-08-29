export default [
  {
    path: '/home',
    title: 'routes.home',
    icon: 'icon-home',
    component: () => import('@~vue/views/home'),
  },

  {
    path: '/antd-ui',
    title: 'routes.antd-ui',
    icon: 'icon-home',
    component: () => import('@~vue/views/antd-ui'),
  },

  {
    path: '/element-ui',
    title: 'routes.element-ui',
    icon: 'icon-home',
    component: () => import('@~vue/views/element-ui'),
  },
];