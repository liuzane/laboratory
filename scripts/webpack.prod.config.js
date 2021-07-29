process.env.NODE_ENV = 'production';

const { merge } = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    
    // 清空输出文件夹
    new CleanWebpackPlugin(),

    // 拷贝 public 文件夹中的文件到输出文件夹
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public' }
      ],
    }),
  ]
});