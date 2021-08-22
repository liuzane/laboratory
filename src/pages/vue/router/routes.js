export default [
  {
    path: '/home',
    title: 'routes.home',
    icon: 'icon-home',
    component: () => import('@~vue/views/home'),
  },

  {
    path: '/view-ui',
    title: 'routes.view-ui',
    icon: 'icon-home',
    component: () => import('@~vue/views/view-ui'),
  },
];