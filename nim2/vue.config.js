const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir:"docs",
  publicPath: process.env.NODE_ENV === "test" ? "test" : "/"   // 레포지스트리(?) 이름쓰기

})
