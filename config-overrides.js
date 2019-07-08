'use strict';

const path = require('path');
// 合并配置插件
const merge = require('webpack-merge');
// 代替 npm run eject 插件
const { injectBabelPlugin } = require('react-app-rewired');
// 配置Eslint 插件
const rewireEslint = require('react-app-rewire-eslint');
// 配置Less 插件
const rewireLess = require('react-app-rewire-less');
// 主要颜色
const colors = require('./src/styles/colors');


module.exports = function override(config, env) {
  // 按需加载样式和组件
  config = injectBabelPlugin(
    [ 'import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    config,
  );

  // 配置Eslint
  config = rewireEslint(config, env);

  // 配置主题色
  config = rewireLess.withLoaderOptions({
    modifyVars: {
      // "@primary-color": "#f00", // antd 主题色
      ...colors,
    },

    javascriptEnabled: true,
  })(config, env);
  
  const webpackConfig = merge(config, {
    // 相对路径
    output: {
      publicPath: './',
    },
    
    // 配置别名
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  });
  
  // console.log(webpackConfig);

  return webpackConfig;
};