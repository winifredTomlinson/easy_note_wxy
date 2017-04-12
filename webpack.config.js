var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: [
    'webpack-dev-server/client?http://localhost:8080/',//资源服务器地址
    'webpack/hot/only-dev-server',
    './src/main.ts'],
  //输出的文件名 合并以后的js会命名为index.js
  output: {
    publicPath: "http://localhost:8080/build/",
    path: BUILD_PATH,
    filename: 'index.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        loaders: ['react-hot', 'babel'],
        include: APP_PATH,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },
    plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new HtmlwebpackPlugin({
    //   title: 'Hello World app'
    //  })
    // other plugins
  ]

  //添加我们的插件 会自动生成一个html文件
  // plugins: [
  //   new HtmlwebpackPlugin({
  //     title: 'Hello World app'
  //   })
  // ]
}