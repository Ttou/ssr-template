import type { FormInstance, FormRules } from 'element-plus'

export function useLogin() {
  const state = reactive({
    loading: false,
    formRef: {} as FormInstance,
    formModel: {
      username: '',
      password: ''
    },
    formRules: {
      username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
    } as FormRules
  })

  const mainStore = useMainStore()

  function handleLogin() {
    state.formRef.validate(valid => {
      if (valid) {
        state.loading = true

        mainStore
          .handleLogin(state.formModel)
          .then(() => {
            navigateTo({
              path: '/requiredAuth',
              replace: true
            })
          })
          .finally(() => {
            state.loading = false
          })
      }
    })
  }

  return {
    ...toRefs(state),
    handleLogin
  }
}
