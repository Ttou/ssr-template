export default defineNuxtConfig({
  srcDir: 'src/',
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/vue.svg' }],
      title: 'SSR Template'
    }
  },
  css: ['@/assets/styles/main.css'],
  postcss: {
    plugins: {
      'postcss-nested': { preserveEmpty: true }
    }
  },
  modules: [
    ['@element-plus/nuxt', { importStyle: 'css' }],
    ['@pinia/nuxt', { autoImports: ['defineStore'] }],
    '@vueuse/nuxt',
    'vue-types-nuxt'
  ],
  devtools: { enabled: true },
  vueTypes: { shim: true },
  vite: {
    css: {
      modules: {
        generateScopedName: '[local]__[hash:base64:5]'
      }
    },
    optimizeDeps: {
      exclude: ['vue-demi']
    },
    build: {
      reportCompressedSize: false
    }
  }
})
