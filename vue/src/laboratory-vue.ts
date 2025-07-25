// Bases
// import 'vite/modulepreload-polyfill';
import { createApp } from 'vue';

// Plugins
import { router } from './router';
import { ManifestLoader } from '@laboratory/common/manifest-loader';

// Types
import type { App as IApp } from 'vue';
import type { ManifestLoader as IManifestLoader } from '@laboratory/common/manifest-loader';

// Enums
import { ModeEnum } from '@laboratory/common/manifest-loader';

// Styles
import './styles/style.css';
import './styles/tailwind.css';

// Web Components
import { PageAnchor } from '@laboratory/common/components';

import App from './App.vue';

// Variables
let manifestLoader: IManifestLoader;
let app: IApp;

export function bootstrap() {
  return Promise.resolve().then(() => {
    // One-time initialization code goes here
    console.log('vue bootstrapped!', __dirname);
    manifestLoader = new ManifestLoader({
      mode: import.meta.env.MODE as ModeEnum,
      origin: import.meta.env.VITE_DEPLOY_ORIGIN + import.meta.env.VITE_PUBLIC_PATH,
      dirname: __dirname,
      ignoreEntryFile: true
    });
    PageAnchor.define();
  });
}

export function mount(props: Record<string, unknown>) {
  return Promise.resolve().then(() => {
    console.log('vue mounted!');
    // Do framework UI rendering here
    manifestLoader.mount();
    setTimeout(() => {
      app = createApp(App);
      // For each app instance, mount() can only be called once.
      app.use(router).mount('#single-spa-application\\:vue');
      if (typeof props.hideLoading === 'function') {
        props.hideLoading();
      }
    }, 2000);
    console.log('manifestLoader:', manifestLoader);
    console.log('import.meta:', import.meta);
    console.log('import.meta.env:', import.meta.env);
    console.log('import.meta.url:', import.meta.url);
    // console.log('url:', new URL('./static/css', import.meta.url));
  });
}

export function unmount() {
  return Promise.resolve().then(() => {
    // Do framework UI unrendering here
    console.log('vue unmounted!');
    manifestLoader.unmount();
    app.unmount();
  });
}