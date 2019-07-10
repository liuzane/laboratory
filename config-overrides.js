'use strict';

const path = require('path');
const {
  override,
  fixBabelImports,
  addLessLoader,
  useEslintRc,
} = require('customize-cra');
const multipageConfig = require('./config-multipage');

// 主要颜色
const colors = require('./src/styles/colors');

// webpack 配置
const webpack = config => {
  config.output.publicPath = './';
  config.resolve.alias['@'] = path.resolve(__dirname, './src');
  return config;
};

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),

  addLessLoader({
    modifyVars: colors,

    javascriptEnabled: true,
  }),

  useEslintRc(),

  multipageConfig,

  webpack,
);