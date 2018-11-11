'use strict';

const path = require('path');
const merge = require('webpack-merge');
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const rewireCssModules = require('react-app-rewire-css-modules');


module.exports = function override(config, env) {
  //按需加载样式和组件
  config = injectBabelPlugin(
    [ 'import', { libraryName: 'antd', libraryDirectory: 'es', style: true }] ,
    config,
  );

  //配置主题色
  config = rewireLess.withLoaderOptions({
    modifyVars: { 
      // "@primary-color": "#f00", 
    },

    javascriptEnabled: true,
  })(config, env);

  //css modules
  config = rewireCssModules(config, env);


  const webpackConfig = merge(config, {
    //配置别名
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  });

  return webpackConfig;
};