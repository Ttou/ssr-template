export const authApi = {
  login: (body: any) => $fetch('/api/auth/login', { method: 'post', body })
}
