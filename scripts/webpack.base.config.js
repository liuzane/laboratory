// Webpack
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Node 模块
const path = require('path');

// 变量
const isDevEnv = process.env.NODE_ENV === 'start';

// Less Colors
const colors = require('../src/styles/colors');


module.exports = {
  mode: isDevEnv ? 'development' : 'production',
  devtool: isDevEnv ? 'cheap-module-source-map' : false,
  entry: {
    login: './src/pages/Login/index.js',
    index: './src/pages/Index/index.js',
    admin: './src/pages/Admin/index.js',
    'solar-system': './src/pages/SolarSystem/index.js',
  },
  output: {
    filename: '[name].[hash:6].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-dynamic-import']
          },
          // cacheDirectory: true,
          // cacheCompression: false,
          // compact: !isDevEnv,
        },
      },
      {
        test: /\.(less|css)$/,
        use: [
          isDevEnv ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              modifyVars: colors,
              javascriptEnabled: true,
              localIdentName: '[name]__[local]--[hash:5]'
            }
          }
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:8].[ext]',
        },
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      }
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
      }
    }
  },
  plugins: [
    // 赋值程序环境变量 ENVIRONMENT
    new webpack.DefinePlugin({
      ENVIRONMENT: JSON.stringify(process.env.NODE_ENV),
    }),

    new HtmlWebpackPlugin({
      filename: 'login.html',
      chunks: ['login', 'vendors'],
      inject: true,
      template: 'index.template.html',
    }),

    new HtmlWebpackPlugin({
      title: 'React Laboratory',
      filename: 'index.html',
      chunks: ['index', 'vendors'],
      inject: true,
      template: 'index.template.html',
    }),

    new HtmlWebpackPlugin({
      filename: 'admin.html',
      chunks: ['admin', 'vendors'],
      inject: true,
      template: 'index.template.html',
    }),

    new HtmlWebpackPlugin({
      filename: 'solar-system.html',
      chunks: ['solar-system', 'vendors'],
      inject: true,
      template: 'index.template.html',
    }),

    //提取css至独立文件
    new MiniCssExtractPlugin({
      filename: `[name].[hash:6].min.css`,
      chunkFilename: `[name].[hash:6].min.css`,
    }),

    //压缩css
    new OptimizeCssAssetsPlugin(),
  ],
};