// const path = require("path");

module.exports = {
  //部署基本包的基本URL，加载目录
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
  //生成的生产环境构建文件的目录
  outputDir: "dist",
  //放置生成的静态资源,相对于outputDir的目录
  assetsDir: "static",
  //指定生成index.html的输出路径
  indexPath: "index.html",
  //是否生成文件名包含hash
  filenameHashing: true,
  //是否在开发环境下通过eslint-loader在每次保存时lint代码
  lintOnSave: "default",
  //是否使用运行时编译器的Vue的构建版本
  runtimeCompiler: false,
  //是否需要生产环境下的source map
  productionSourceMap: false,
  //pwa插件用于生成app
  pwa: {},
  css: {
    //是否将组件中的 CSS 提取至一个独立的 CSS 文件
    extract: process.env.NODE_ENV === "production" ? true : false,
  },
  devServer: {
    //是否开启热更新
    hotOnly: true,
    //代理服务器，不在本地
    proxy: {
      "/api": {
        //后台接口
        target: "http://localhost:8080",
        //是否需要代理ws
        ws: false,
        //是否为https
        secure: false,
        //是否跨域
        changeOrigin: true,
        //重写api，后端路由就不需要写上api
        pathRewrite: {
          "^/api": "/"
        }
      }
    },
  },
}