export const useMainStore = defineStore('main', () => {
  const state = reactive({
    count: 0,
    token: useCookie('token', { maxAge: 60 * 60 * 24 * 3 })
  })

  /**
   * 加法
   */
  function increment() {
    state.count++
  }

  /**
   * 登录
   * @param payload
   */
  async function handleLogin(payload: any) {
    const data = await authApi.login(payload)

    state.token = data
  }

  /**
   * 退出
   */
  async function handleLogout() {
    state.token = ''
  }

  return {
    ...toRefs(state),
    increment,
    handleLogin,
    handleLogout
  }
})
