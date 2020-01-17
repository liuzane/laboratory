'use strict';

const path = require('path');
// const paths = require('react-scripts/config/paths');
const {
  override,
  addWebpackAlias,
  fixBabelImports,
  addLessLoader,
  useEslintRc,
} = require('customize-cra');

// 多页面配置
const multipageConfig = require('./config-multipage');

// 主要颜色
const colors = require('./src/styles/colors');

// webpack 配置
const webpack = config => {
  // paths.appBuild = path.join(path.dirname(paths.appBuild), 'build');
  // config.output.path = path.join(path.dirname(config.output.path), 'build');
  config.output.publicPath = process.env.NODE_ENV === 'production' ? './' : '/';
  return config;
};

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, './src'),
  }),

  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),

  addLessLoader({
    modifyVars: colors,
    javascriptEnabled: true,
    localIdentName: '[name]__[local]--[hash:5]'
  }),

  useEslintRc(),

  multipageConfig,

  webpack,
);