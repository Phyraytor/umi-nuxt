export function useAuth() {
  const {$fetchData} = useNuxtApp()

  const authWithoutBackend = () => {
    // Todo: remove this before connect API
    useCookie('auth:token').value = 'TRUE'
    navigateTo('/')
  }

  const logout = () => {
    useCookie('auth:token').value = undefined
    navigateTo('/auth')
  }
  const signIn = async (payload: {
    login: string | null
    password: string | null
  }) => {
    return await $fetchData({
      api: '/auth/sign-in',
      body: payload,
      method: 'post',
      args: {
        async onRequestError({ }: any) {
          authWithoutBackend();
        },
        async onResponse({response}: any) {
          if (!response.ok) {
            authWithoutBackend();
            return
          }
          const { _data } = response
          useCookie('auth:token').value = _data?.access_token
          navigateTo('/')
        },
      },
    })
  }

  const isLoggedIn = () => {
    const refresh = useCookie('auth:token', {watch: true})
    return refresh.value !== undefined
  }
  return {
    isLoggedIn,
    signIn,
    logout,
  }
}