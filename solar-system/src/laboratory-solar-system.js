// // service worker
// import * as serviceWorker from '@/serviceWorker';

// // 基础模块
// import React from 'react';
// import ReactDOM from 'react-dom';

// // 全局样式
// import '@/styles';

// // 入口组件
// import SolarSystem from './SolarSystem';

// ReactDOM.render(
//   <SolarSystem />,
//   document.getElementById('root')
// );

// serviceWorker.unregister();
// Plugins
import { ManifestLoader } from '@laboratory/common/manifest-loader';

// Enums
import { ModeEnum } from '@laboratory/common/manifest-loader';

// Main Entry
import SolarSystem from './SolarSystem';

// Variables
let app;
let manifestLoader;

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
    app = new SolarSystem();
    document.getElementById('single-spa-application:solar-system').appendChild(app.render());
  });
}

export function unmount() {
  return Promise.resolve().then(() => {
    // Do framework UI unrendering here
    console.log('entry unmounted!');
    manifestLoader.unmount();
  });
}
