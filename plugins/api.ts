// Refer to https://nuxt.com/docs/guide/recipes/custom-usefetch
export default defineNuxtPlugin((nuxtApp) => {
  const { token, clearToken } = useAuthState();

  const api = $fetch.create({
    baseURL: nuxtApp.$config.public.API_URL,
    onRequest({ options }) {
      if (token.value) {
        options.headers.set("Authorization", `Bearer ${token.value}`);
      }
    },
    async onResponseError({ response }) {
      if (response.status === 401) {
        clearToken();
        await nuxtApp.runWithContext(() => navigateTo("/login"));
      }
    },
  });

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api,
    },
  };
});
