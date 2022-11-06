import { resolve } from 'path'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

const isDev = process.env.NODE_ENV === 'development'

export default defineNuxtConfig({
  srcDir: 'src/',
  app: {
    head: {
      link: [{ rel: 'icon', href: '/favicon.ico' }]
    }
  },
  build: {
    transpile: ['lodash-es', isDev ? '' : '@babel/runtime']
  },
  css: [
    'ant-design-vue/dist/antd.variable.min.css',
    '@/assets/css/main.css',
    '@/assets/css/theme.css'
  ],
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore']
      }
    ],
    '@vueuse/nuxt',
    'nuxt-lodash'
  ],
  alias: {
    dayjs: 'dayjs/esm/'
  },
  vite: {
    css: {
      modules: {
        generateScopedName: '[local]__[hash:base64:5]'
      }
    },
    devBundler: 'vite-node',
    plugins: [
      Components({
        dts: false,
        resolvers: [
          AntDesignVueResolver({
            resolveIcons: false,
            importStyle: false
          })
        ]
      })
    ],
    logLevel: 'error',
    ssr: {
      noExternal: ['ant-design-vue', 'dayjs']
    }
  }
})
