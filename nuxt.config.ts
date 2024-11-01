// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  // Enable this to perform server-side rendering in your app.
  ssr: false,

  // Enable type-checking at build time: https://nuxt.com/docs/guide/concepts/typescript
  typescript: {
    typeCheck: true,
  },

  modules: ["@nuxt/ui", "@nuxt/image"],
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "dark", // fallback value if not system preference found
  },
});
