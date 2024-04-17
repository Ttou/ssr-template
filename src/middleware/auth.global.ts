export default defineNuxtRouteMiddleware((to, from) => {
  const { token } = useMainStore()

  if (!token && to.path === '/requiredAuth') {
    return navigateTo('/login')
  }

  if (token && to.path === '/login') {
    return navigateTo('/requiredAuth')
  }
})
