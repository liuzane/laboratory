// 工具方法
import { createRoutes } from './tools';

// 异步加载
import AsyncLoad from './AsyncLoad';

// 容器组件
import Container from './Container';

// 404 未找到页面
const NotFound = {
  path: '',
  hidden: true,
  component: AsyncLoad(() => import('@-react/components/NotFound')),
};

const children = [
  {
    path: '',
    redirect: 'home',
    exact: true,
    hidden: true,
  },

  {
    path: 'home',
    title: 'routes.home',
    icon: 'icon-home',
    component: AsyncLoad(() => import('@-react/views/home')),
    exact: true,
  },

  {
    path: 'components',
    title: 'routes.components',
    icon: 'icon-components',
    component: Container,
    children: [
      {
        path: '',
        exact: true,
        redirect: 'filter',
        hidden: true,
      },

      // {
      //   path: 'count-table',
      //   title: 'routes.components.count-table',
      //   component: AsyncLoad(() => import('@-react/views/components/count-table')),
      //   exact: true,
      // },

      {
        path: 'filter',
        title: 'routes.components.filter',
        component: AsyncLoad(() => import('@-react/views/components/filter')),
        exact: true,
      },

      {
        path: 'rc-table',
        title: 'routes.components.rc-table',
        component: AsyncLoad(() => import('@-react/views/components/rc-table')),
        exact: true,
      },

      {
        path: 'validate',
        title: 'routes.components.validate',
        component: AsyncLoad(() => import('@-react/views/components/validate')),
        exact: true,
      },
    ],
  },

  {
    path: 'funnies',
    title: 'routes.funnies',
    icon: 'icon-funnies',
    component: Container,
    children: [
      {
        path: '',
        exact: true,
        redirect: 'animation',
        hidden: true,
      },

      {
        path: 'animation',
        title: 'routes.funnies.animation',
        component: AsyncLoad(() => import('@-react/views/funnies/animation')),
        exact: true,
      },

      {
        path: 'floors',
        title: 'routes.funnies.floors',
        component: AsyncLoad(() => import('@-react/views/funnies/floors')),
        exact: true,
      },

      {
        path: 'svg',
        title: 'routes.funnies.svg',
        component: AsyncLoad(() => import('@-react/views/funnies/svg')),
        exact: true,
      },

      {
        path: 'iframe',
        title: 'routes.funnies.iframe',
        component: AsyncLoad(() => import('@-react/views/funnies/iframe')),
        exact: true,
      },
    ],
  },

  {
    path: 'typescript',
    title: 'routes.typescript',
    icon: 'icon-funnies',
    component: Container,
    children: [
      {
        path: '',
        exact: true,
        redirect: 'basic-types',
        hidden: true,
      },

      {
        path: 'basic-types',
        title: 'routes.typescript.basic-types',
        component: AsyncLoad(() => import('@-react/views/typescript/basic-types')),
        exact: true,
      },
    ],
  },

  {
    path: 'others',
    title: 'routes.others',
    icon: 'icon-others',
    component: Container,
    children: [
      {
        path: '',
        exact: true,
        redirect: 'less',
        hidden: true,
      },

      {
        path: 'less',
        title: 'routes.others.less',
        component: AsyncLoad(() => import('@-react/views/others/Less')),
        exact: true,
      },

      {
        path: 'module',
        title: 'routes.others.module',
        component: AsyncLoad(() => import('@-react/views/others/Module')),
        exact: true,
      },

      {
        path: 'grammar',
        title: 'routes.others.grammar',
        component: AsyncLoad(() => import('@-react/views/others/Grammar')),
        exact: true,
      },
    ],
  },
];

const routes = [
  {
    path: '/:language',
    component: AsyncLoad(() => import('@-react/App')),
    children,
  },

  {
    path: '/',
    hidden: true,
    redirect: `/${window.navigator.language.toLocaleLowerCase()}`,
    // redirect: '/:language',
    exact: true,
  },
];


export default createRoutes(routes, NotFound, true);