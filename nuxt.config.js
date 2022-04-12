import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
  srcDir: 'src/',
  app: {
    head: {
      link: [{ rel: 'icon', href: '/favicon.ico' }]
    }
  },
  css: ['ant-design-vue/dist/antd.less'],
  vite: {
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          // https://gitee.com/ant-design-vue/ant-design-vue/blob/next/components/style/themes/default.less
          modifyVars: {
            'primary-color': '#07c160'
          }
        }
      },
      modules: {
        generateScopedName: '[local]__[hash:base64:5]'
      }
    }
  },
  modules: ['@pinia/nuxt']
})
