// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  // Enable type-checking at build time: https://nuxt.com/docs/guide/concepts/typescript
  typescript: {
    typeCheck: true,
  },

  modules: ["@nuxt/ui"],
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "dark", // fallback value if not system preference found
  },
});
