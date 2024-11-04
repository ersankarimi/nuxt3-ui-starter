import process from "node:process";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  // Enable this to perform server-side rendering in your app.
  ssr: false,

  // CSS Configuration (https://nuxt.com/docs/api/nuxt-config#css)
  css: ["@/assets/css/app.css"],

  // Enable type-checking at build time (https://nuxt.com/docs/guide/concepts/typescript)
  typescript: {
    typeCheck: true,
  },

  // Nuxt TailwindCSS Configuration (https://tailwindcss.nuxtjs.org/)
  tailwindcss: {
    cssPath: "@/assets/css/app.css",
    configPath: "tailwind.config.js",
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

  modules: ["@nuxt/ui", "@nuxt/image", "@nuxt/fonts", "@pinia/nuxt", "@sidebase/nuxt-auth"],
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

  // @sidebase/nuxt-auth Configuration (https://auth.sidebase.io/)
  // https://auth.sidebase.io/guide/local/quick-start
  // On this example, we are using the local provider.
  auth: {
    baseURL: `${process.env.NUXT_PUBLIC_API_URL}/`,
    provider: {
      type: "local",
      pages: {
        login: "auth/login",
      },
      endpoints: {
        signIn: {
          path: "auth/login",
          method: "post",
        },
        getSession: {
          path: "auth/me",
          method: "get",
        },
        signOut: false,
      },
      refresh: {
        isEnabled: true,
        endpoint: {
          path: "auth/refresh",
          method: "post",
        },
        token: {
          refreshRequestTokenPointer: "/refreshToken",
          signInResponseRefreshTokenPointer: "/accessToken",
          cookieName: "auth.token",
          maxAgeInSeconds: 3600,
        },
      },
      token: {
        signInResponseTokenPointer: "/accessToken",
        type: "Bearer",
        cookieName: "auth.token",
        headerName: "Authorization",
        maxAgeInSeconds: 3600,
      },

    },
  },

  // Runtime Config (https://nuxt.com/docs/api/nuxt-config#runtimeconfig-1)
  runtimeConfig: {
    public: {
      API_URL: process.env.NUXT_PUBLIC_API_URL,
    },
  },
});
