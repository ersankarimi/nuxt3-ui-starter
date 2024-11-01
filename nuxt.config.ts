// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  // Enable this to perform server-side rendering in your app.
  ssr: false,

  // Enable type-checking at build time (https://nuxt.com/docs/guide/concepts/typescript)
  typescript: {
    typeCheck: true,
  },

  // Nuxt Image Configuration (https://image.nuxt.com/advanced/static-images)
  nitro: {
    prerender: {
      routes: [
        "/_ipx/_/dots.svg",
        "/_ipx/_/circle-blur.svg",
      ],
    },
  },

  modules: ["@nuxt/ui", "@nuxt/image", "@nuxt/fonts"],
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "dark", // fallback value if not system preference found
  },

  // Nuxt Font Configuration (https://fonts.nuxt.com)
  fonts: {
    defaults: {
      subsets: ["latin"],
      weights: [400, 700],
    },
    families: [
      {
        name: "Manrope",
        display: "swap",
        provider: "google",
      },
    ],
  },

});
