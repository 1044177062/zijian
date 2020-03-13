module.exports = {
  lintOnSave:false,
  runtimeCompiler: true,
  outputDir: 'dist',   //build输出目录
  assetsDir: 'assets', //静态资源目录（js, css, img）
  publicPath: './',  //输出的根路径  默认是/ 如果你的网站是app.com/vue 这更改此配置项
  devServer: {
       open: true, //是否自动弹出浏览器页面
       port: '8080'
  }
}