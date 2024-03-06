
// Todo move to .env
const API = 'http://localhost:3031'

export default defineNuxtPlugin((nuxtApp) => {
  const fetchData = async ({
    api,
    key,
    method,
    body,
    query = {},
    headers = {},
    urlPrefix = '',
    bearer = true,
    args = {},
  }: any) => {
    const accessToken = useCookie('auth:token', { watch: true })
    const authorization = bearer ? `Bearer ${accessToken.value}` : accessToken.value
    const params = {
      key,
      query,
      method,
      body,
      watch: false,
      baseURL: `${API}/${urlPrefix}/`,
      headers: {
        // 'authorization': authorization,
        ...headers,
      },
      onResponse({ response }: { response: { _data: unknown } }) {
        if (method === 'get' || !method) {
          const { _data } = response
          console.log('_data', _data)
        }
      },
/*      onResponseError({ response }: any) {
        console.log('response', response)
      },*/
      ...args,
    }
    return await $fetch(api, params)
  }

  return {
    provide: {
      fetchData,
    },
  }
});