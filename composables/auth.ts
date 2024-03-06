export function useAuth() {
  const { $fetchData } = useNuxtApp()

  const logout = () => {
    useCookie('auth:token').value = undefined
    navigateTo('/auth')
  }
  const signIn = async (payload: {
    username: string | null
    password: string | null
  }) => {
    // Todo move this to onResponse before connect backend
    useCookie('auth:token').value = 'TRUE'
    navigateTo('/')
    return await $fetchData({
      api: '/auth/sign-in',
      body: payload,
      method: 'post',
      args: {
        async onResponse({ response }: any) {
          if (!response.ok) return
        },
      },
    })
  }

  const isLoggedIn = () =>  {
    const refresh = useCookie('auth:token', { watch: true })
    return refresh.value !== undefined
  }
  return {
    isLoggedIn,
    signIn,
    logout,
  }
}