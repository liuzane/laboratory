// Loading
// import { FullscreenLoading } from '@laboratory/common';
import { FullscreenLoading } from '@laboratory/common/components';

// Types
import type { ParcelConfig } from 'single-spa';
// @ts-expect-error single-spa-layout does not expose type RoutesConfig
import type { RoutesConfig } from 'single-spa-layout/dist/types/isomorphic/constructRoutes.d.ts';

interface IApplication {
  path: string;
  name: string;
  exact?: boolean;
}

// Register loading component
FullscreenLoading.define();

// Create loading component
function createFullscreenLoading(): ParcelConfig {
  return {
    bootstrap() {
      return Promise.resolve().then(() => {
        const loading = document.createElement('fullscreen-loading');
        document.body.appendChild(loading);
      });
    },
    mount: () => Promise.resolve(),
    unmount: () => Promise.resolve()
  };
}

// Remove loading component
function removeFullscreenLoading(): void {
  const loading = document.querySelector('fullscreen-loading');
  if (loading) {
    document.body.removeChild(loading);
  }
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
        loader: createFullscreenLoading(),
        props: { hideLoading: removeFullscreenLoading }
      }
    ]
  })),
  redirects: {
    '/': '#/'
  }
};
