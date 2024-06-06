// Loading
// import { FullscreenLoading } from '@laboratory/common';
import { FullscreenLoading } from '@laboratory/common/components';

// Types
// @ts-expect-error single-spa-layout does not expose type RoutesConfig
import type { RoutesConfig } from 'single-spa-layout/dist/types/isomorphic/constructRoutes.d.ts';

FullscreenLoading.define();

interface IApplication {
  path: string;
  name: string;
  exact?: boolean;
}

const applications: IApplication[] = [
  { path: '/', name: 'entry', exact: true },
  { path: '/login', name: 'login', exact: true },
  { path: '/solar-system', name: 'solar-system', exact: true },
  { path: '/vue', name: 'vue' },
  { path: '/react', name: 'react' }
];

export const routesConfig: RoutesConfig = {
  mode: 'hash',
  base: __PUBLIC_PATH,
  disableWarnings: false,
  containerEl: 'main',
  routes: applications.map(application => ({
    type: 'route',
    path: application.path,
    exact: application.exact || false,
    routes: [
      {
        type: 'application',
        name: application.name,
        loader: '<fullscreen-loading />'
      }
    ]
  })),
  redirects: {
    '/': '#/'
  }
};
