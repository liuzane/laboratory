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

// 多文件配置
const multiplePageConfig = [
  {
    entry: 'login',
    path: './src/pages/login/index.js',
    title: 'Login',
  },
  {
    entry: 'index',
    path: './src/pages/index/index.js',
    title: 'My Laboratory Index',
  },
  {
    entry: 'react',
    path: './src/pages/react/index.js',
    title: 'React Laboratory',
  },
  // {
  //   entry: 'vue',
  //   path: './src/pages/vue/index.js',
  //   title: 'Vue Laboratory',
  // },
  {
    entry: 'admin',
    path: './src/pages/admin/index.js',
    title: 'Admin Laboratory',
  },
  {
    entry: 'solar-system',
    path: './src/pages/SolarSystem/index.js',
    title: 'Solar System',
  },
];


module.exports = {
  mode: isDevEnv ? 'development' : 'production',
  devtool: isDevEnv ? 'cheap-module-source-map' : false,
  entry: multiplePageConfig.reduce((entries, current) => {
    entries[current.entry] = current.path;
    return entries;
  }, {}),
  output: {
    filename: '[name].[hash:6].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@react': path.resolve(__dirname, '../src/pages/react'),
      '@vue': path.resolve(__dirname, '../src/pages/vue'),
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
              localIdentName: '[name]__[local]--[hash:6]'
            }
          }
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:6].[ext]',
        },
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        loader: 'url-loader',
        options: {
          limit: false,
          name: 'font/[name].[hash:6].[ext]',
        },
      }
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/](?!(react-?.*|vue-?.*|@rematch\/core|antd|ant-design|rc-?.*))/,
          // name: 'commons',
          chunks: 'all'
        },
        reactChunks: {
          test: /[\\/]node_modules[\\/](react-?.*|@rematch\/core|antd|ant-design|rc-?.*)/,
          // name: 'reactChunks',
          chunks: 'all'
        },
        vueChunks: {
          test: /[\\/]node_modules[\\/](vue-?.*)/,
          // name: 'vueChunks',
          chunks: 'all'
        },
      }
    }
  },
  plugins: [
    // 赋值程序环境变量 ENVIRONMENT
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),

    // HtmlWebpackPlugin 多页面配置
    ...multiplePageConfig.map(item => {
      return new HtmlWebpackPlugin({
        title: item.title,
        filename: item.entry + '.html',
        chunks: [item.entry],
        inject: true,
        template: 'index.template.html',
      });
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