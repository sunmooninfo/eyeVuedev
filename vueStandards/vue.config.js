const path = require(`path`)
const CompressionWebpackPlugin = require(`compression-webpack-plugin`)

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: ``,
  assetsDir: `assets`,

  chainWebpack: (config) => {
    config.module.rule(`eslint`).
      use(`eslint-loader`).
      loader(`eslint-loader`).
      tap(options => {
        options.fix = true
        return options
      })
    // 设置项目目录别名
    config.resolve.alias.set(`@`, resolve(`src`)).
      set(`@core`, resolve(`src/core`)).
      set(`@assets`, resolve(`src/assets`)).
      set(`@components`, resolve(`src/components`)).
      set(`@stores`, resolve(`src/stores`)).
      set(`@views`, resolve(`src/views`)).
      set(`@mixins`, resolve(`src/mixins`)).
      set(`@static`, resolve(`src/static`)).
      set(`@config`, resolve(`src/config`)).
      set(`@plugin`, resolve(`src/plugins`)).
      set(`@utils`, resolve(`src/utils`)).
      set(`@services`, resolve(`src/services`))

    // 添加svg-loader
    const svgRule = config.module.rule(`svg`)
    svgRule.uses.clear()
    svgRule.use(`babel-loader`).
      loader(`babel-loader`).
      end().
      use(`vue-svg-loader`).
      loader(`vue-svg-loader`).
      options({
        svgo: {
          plugins: [
            { removeDoctype: true },
            { removeComments: true },
            { removeViewBox: false },
          ],
          removeViewBox: false,
        },
      }).
      end()

    /**
     * 删除懒加载模块的 prefetch preload，降低带宽压力
     * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
     * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload
     * 而且预渲染时生成的 prefetch 标签是 modern 版本的，低版本浏览器是不需要的
     */
    config.plugins.delete(`prefetch`).delete(`preload`)

    config.when(process.env.NODE_ENV === `production`, config => {
      //  参数配置文档: https://www.webpackjs.com/plugins/compression-webpack-plugin/
      // 前端开启gzip提升加载速度
      config.plugin(`compression`).use(CompressionWebpackPlugin, [
        {
          algorithm: `gzip`,
          test: /\.(js|css|html)$/,
          threshold: 0,
          minRatio: 0.8,
        },
      ])
    })
  },

  transpileDependencies: [],
  configureWebpack: {},

  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'primary-red': `#f5222d`, // 红色主色
            'primary-color': `#2981EA`, // 全局主色

            'link-color': `#1890ff`, // 链接色
            'success-color': `#52c41a`, // 成功色
            'warning-color': `#faad14`, // 警告色
            'error-color': `#f5222d`, // 错误色
            'heading-color': `rgba(0, 0, 0, .85)`, // 标题色
            'text-color': `rgba(0, 0, 0, .65)`, // 主文本色
            'text-color-secondary': `rgba(0, 0, 0, .45)`, // 次文本色
            'disabled-color': `rgba(0, 0, 0, .25)`, // 失效色
            'border-color-base': `#d9d9d9`, // 边框色
            'border-color-base-secondary': `#f1f1f1`, // 边框色
            'font-size-base': `14px`, // 默认字体大小
            'border-base': `1px solid @border-color-base`,
            'border-base-secondary': `1px solid @border-color-base-secondary`,
            'slider-gutter-sm': `8px`,
            'slider-gutter': `12px`,
            'slider-gutter-lg': `16px`,
          },
          javascriptEnabled: true,
        },
      },
    },
    sourceMap: true,
  },

  devServer: {},
  outputDir: undefined,
  runtimeCompiler: true,
  productionSourceMap: false,
  parallel: undefined,
}
