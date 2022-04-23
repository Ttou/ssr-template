import { defineNuxtConfig } from 'nuxt'

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
    },
    // @ts-expect-error: Missing ssr key
    ssr: {
      noExternal: ['compute-scroll-into-view', 'ant-design-vue']
    }
  },
  modules: ['@pinia/nuxt'],
  runtimeConfig: {
    app: {},
    public: {}
  }
})
