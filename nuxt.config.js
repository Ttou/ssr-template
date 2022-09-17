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
  css: ['@/assets/css/main.css'],
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
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          // https://www.antdv.com/docs/vue/customize-theme/#Ant-Design-Vue-Less-variables
          modifyVars: {}
        }
      }
    },
    devBundler: 'vite-node',
    plugins: [
      Components({
        dts: resolve('types/components.d.ts'),
        resolvers: [
          AntDesignVueResolver({
            resolveIcons: false,
            importStyle: 'less'
          })
        ]
      })
    ],
    ssr: {
      noExternal: ['ant-design-vue', 'dayjs']
    }
  }
})
