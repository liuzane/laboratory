// Loading
// import { FullscreenLoading } from '@laboratory/common';
import { FullscreenLoading } from '@laboratory/common/components';

// Types
// @ts-expect-error single-spa-layout does not expose type RoutesConfig
import type { RoutesConfig } from 'single-spa-layout/dist/types/isomorphic/constructRoutes.d.ts';

FullscreenLoading.define();

const applications: { path: string; name: string }[] = [
  { path: '/', name: 'entry' },
  { path: '/solar-system', name: 'solar-system' },
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
    exact: true,
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
