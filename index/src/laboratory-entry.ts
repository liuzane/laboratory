// Plugins
import { ManifestLoader } from '@laboratory/common/utils';

// Types
import type { ManifestLoader as IManifestLoader } from '@laboratory/common/utils';

// Enums
import { ModeEnum } from '@laboratory/common/utils';

// Main Entry
import App from './App';

// Variables
let app: InstanceType<typeof App>;
let manifestLoader: IManifestLoader;

export function bootstrap() {
  return Promise.resolve().then(() => {
    // One-time initialization code goes here
    console.log('entry bootstrapped!');
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
    console.log('entry mounted!');
    manifestLoader.mount();
    app = new App();
    document.getElementById('single-spa-application:entry').appendChild(app.render());
  });
}

export function unmount() {
  return Promise.resolve().then(() => {
    // Do framework UI unrendering here
    console.log('entry unmounted!');
    manifestLoader.unmount();
  });
}