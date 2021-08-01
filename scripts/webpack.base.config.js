// Webpack
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Node 模块
const path = require('path');

// 变量
const isDevEnv = process.env.NODE_ENV === 'start';
const processEnv = require('./env.js');

// Less Colors
const colors = require('../src/styles/colors.js');

// 多文件配置
const multiplePageConfig = [
  {
    entry: 'login',
    path: './src/pages/login/main.js',
    title: 'Login',
  },
  {
    entry: 'index',
    path: './src/pages/index/main.js',
    title: 'My Laboratory Index',
  },
  {
    entry: 'react',
    path: './src/pages/react/main.js',
    title: 'React Laboratory',
    favicon: `${processEnv.STATIC_URL}/react-favicon.ico`,
  },
  {
    entry: 'vue',
    path: './src/pages/vue/main.js',
    title: 'Vue Laboratory',
    favicon: `${processEnv.STATIC_URL}/vue-favicon.ico`,
  },
  {
    entry: 'admin',
    path: './src/pages/admin/main.js',
    title: 'Admin Laboratory',
  },
  {
    entry: 'solar-system',
    path: './src/pages/SolarSystem/main.js',
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
    publicPath: processEnv.PUBLIC_URL,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@~react': path.resolve(__dirname, '../src/pages/react'),
      '@~vue': path.resolve(__dirname, '../src/pages/vue'),

      // 是一个简单的 'export * from '@vue/runtime-dom'。 然而在这额外的重新导出莫名其妙地导致webpack总是使模块无效
      vue: '@vue/runtime-dom',
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
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.(css|less)$/,
        oneOf: [
          {
            issuer: /\.vue$/,
            use: [
              isDevEnv ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
              'css-loader',
              'less-loader',
            ],
          },
          {
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
          limit: 10000,
          name: 'fonts/[name].[hash:6].[ext]',
        },
      }
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/](?!(react-?.*|@?vue-?.*|@rematch\/core|antd|ant-design|rc-?.*))/,
          // name: 'commons',
          chunks: 'all'
        },
        reactChunks: {
          test: /[\\/]node_modules[\\/](react-?.*|@rematch\/core|antd|ant-design|rc-?.*)/,
          // name: 'reactChunks',
          chunks: 'all'
        },
        vueChunks: {
          test: /[\\/]node_modules[\\/](@?vue-?.*)/,
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
      ...Object.keys(processEnv).reduce((env, currentKey) => {
        env[currentKey] = JSON.stringify(processEnv[currentKey]);
        return env;
      }, {})
    }),

    // HtmlWebpackPlugin 多页面配置
    ...multiplePageConfig.map(({ entry, path, ...restOptions }) => {
      return new HtmlWebpackPlugin({
        filename: entry + '.html',
        chunks: [entry],
        inject: true,
        publicPath: processEnv.PUBLIC_URL,
        template: 'index.template.html',
        ...restOptions
      });
    }),

    new VueLoaderPlugin(),

    //提取css至独立文件
    new MiniCssExtractPlugin({
      filename: `[name].[hash:6].min.css`,
      chunkFilename: `[name].[hash:6].min.css`,
    }),

    //压缩css
    new OptimizeCssAssetsPlugin(),
  ],
};