// Plugins
import { ManifestLoader } from '@laboratory/common/manifest-loader';

// Types
import type { ManifestLoader as IManifestLoader } from '@laboratory/common/manifest-loader';

// Enums
import { ModeEnum } from '@laboratory/common/manifest-loader';

// Main Login
import App from './App';

// Variables
let app: InstanceType<typeof App>;
let manifestLoader: IManifestLoader;

export function bootstrap() {
  return Promise.resolve().then(() => {
    // One-time initialization code goes here
    console.log('login bootstrapped!');
    manifestLoader = new ManifestLoader({
      mode: ModeEnum.Production,
      origin: __DEPLOY_ORIGIN,
      ignoreEntryFile: true,
      manifestPath: '/manifest.json'
    });
  });
}

export function mount() {
  return Promise.resolve().then(() => {
    console.log('login mounted!');
    manifestLoader.mount();
    app = new App();
    document.getElementById('single-spa-application:login').appendChild(app.render());
  });
}

export function unmount() {
  return Promise.resolve().then(() => {
    // Do framework UI unrendering here
    console.log('login unmounted!');
    manifestLoader.unmount();
  });
}
