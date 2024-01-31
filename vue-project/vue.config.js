const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': '@/assets', // 별칭 설정 예시
      },
    },
  },
  outputDir: "../backend/src/main/resources/static",
  devServer: {
    proxy: 'http://localhost:8080'
  },
})