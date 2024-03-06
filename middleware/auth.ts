export default defineNuxtRouteMiddleware(async (to): Promise<any> => {
  const { isLoggedIn } = useAuth()
  if (!isLoggedIn()) {
    return navigateTo('/auth')
  }
})
