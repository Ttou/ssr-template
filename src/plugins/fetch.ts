import { ElMessage } from 'element-plus'

export default defineNuxtPlugin((nuxtApp) => {
  globalThis.$fetch = $fetch.create({
    onRequest({ options }) {
      const { token } = useMainStore()

      if (token) {
        options.headers = { Authorization: `Bearer ${token}` }
      }
    },
    onResponseError({ response }) {
      const { statusCode, message } = response._data

      ElMessage.error(
        {
          message: `【${statusCode}】${message}`,
          duration: 1500
        },
        nuxtApp.vueApp._context
      )
    }
  })
})
