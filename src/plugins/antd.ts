import 'ant-design-vue/dist/antd.less'

import Antd from 'ant-design-vue/lib'

export default defineNuxtPlugin(ctx => {
  ctx.vueApp.use(Antd)
})
