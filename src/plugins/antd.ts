import 'ant-design-vue/dist/antd.css'

import Antd from 'ant-design-vue/lib'

export default defineNuxtPlugin(ctx => {
  ctx.vueApp.use(Antd)
})
