'use strict';

const autoprefixer = require('autoprefixer');
const path = require('path');
const merge = require('webpack-merge');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const paths = require('./paths');


module.exports = function override(config, env) {
  //配置别名
	// const alias = Object.assign(config.resolve.alias, {
	// 	'@': path.resolve(__dirname, './src'),
	// });

	// config.resolve.alias = alias;

  
 //  // console.log(config.module.rules[2].oneOf[3].use[0].modules = true, 15)
 //  let css = config.module.rules[2].oneOf[3].use[0];
 //  css.modules = true;
 //  config.module.rules[2].oneOf[3].use[0] = css;
  //配置css modules
  // let rules = config.module.rules;
  // rules.push({
  //   loader: require.resolve('css-loader'),
  //   options: {
  //     modules: true,
  //     importLoaders: 1,
  //     localIdentName: '[local]___[hash:base64:5]'
  //   },
  // });


  // return config;


  const webpackConfig = merge(config, {
    //配置别名
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    }
    //配置css modules
  });
  return webpackConfig;
};