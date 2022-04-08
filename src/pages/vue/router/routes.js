// 路由处理工具
import { Container, createRoutes } from './tools';

export default createRoutes([
  {
    path: '',
    redirect: '/home',
    hidden: true,
  },

  {
    path: '/home',
    name: 'routes.home',
    icon: 'home',
    component: () => import('@-vue/views/home'),
  },

  {
    path: '/library',
    name: 'routes.library',
    icon: 'library',
    component: Container,
    children: [
      {
        path: '',
        redirect: 'antd-ui',
        hidden: true,
      },

      {
        path: 'antd-ui',
        name: 'routes.antd-ui',
        component: () => import('@-vue/views/ui/antd-ui'),
      },

      {
        path: 'element-ui',
        name: 'routes.element-ui',
        component: () => import('@-vue/views/ui/element-ui'),
      },
    ],
  },

  {
    path: '/vue-api',
    name: 'routes.vue-api',
    icon: 'api',
    component: Container,
    children: [
      {
        path: '',
        redirect: 'setup',
        hidden: true,
      },

      {
        path: 'setup',
        name: 'routes.setup',
        component: () => import('@-vue/views/vue-api/setup'),
      },
    ],
  },

  {
    path: '/a',
    name: 'routes.a',
    icon: 'home',
    component: Container,
    children: [
      {
        path: '',
        redirect: 'a',
        hidden: true,
      },

      {
        path: 'b',
        name: 'routes.b',
        component: Container,
        children: [
          {
            path: '',
            redirect: 'c',
            hidden: true,
          },

          {
            path: 'c',
            name: 'routes.c',
            component: Container,
            children: [
              {
                path: '',
                redirect: 'd',
                hidden: true,
              },

              {
                path: 'd',
                name: 'routes.d',
                component: () => import('@-vue/components/HelloWorld.vue'),
              },
            ],
          },
        ],
      },
    ],
  },

  {
    path: '/:pathMatch(.*)*',
    component: () => import('@-vue/views/not-found'),
  },
]);