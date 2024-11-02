<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";

const { y } = useWindowScroll();

const isScrolled = computed(() => y.value > 0);

const enhancements = [
  {
    title: "Nuxt Auth",
    description: "User authentication and sessions for Nuxt 3 applications.",
    details: "NuxtAuth provides multiple authentication methods, allowing direct access to user sessions in pages, components, and composables.",
    link: "https://sidebase.io/nuxt-auth",
    icon: "i-heroicons-shield-check-solid",
  },
  {
    title: "Nuxt Image",
    description: "Optimized image handling with responsive and lazy loading for Nuxt apps.",
    details: "Resize and transform images using either the built-in optimizer or a preferred image CDN.",
    link: "https://image.nuxt.com/",
    icon: "i-heroicons-photo-solid",
  },
  {
    title: "Nuxt Font",
    description: "Plug-and-play font optimization tailored for Nuxt applications.",
    details: "Use and optimize fonts with ease from your preferred font source.",
    link: "https://fonts.nuxt.com/",
    icon: "i-heroicons-document-text-solid",
  },
  {
    title: "Pinia",
    description: "The intuitive store for Vue.js.",
    details: "Type safe, extensible, and modular by design. Makes state management seamless and unobtrusive.",
    link: "https://pinia.vuejs.org/",
    icon: "i-heroicons-cube-transparent",
  },
  {
    title: "Custom $fetch",
    description: "Configurable $fetch instance for secure and optimized API interactions.",
    details: "Supports session-based authentication, error handling, and redirects on 401 responses.",
    link: "https://nuxt.com/docs/guide/recipes/custom-usefetch#custom-fetch",
    icon: "i-heroicons-code-bracket-solid",
  },
  {
    title: "Custom useFetch",
    description: "Customized data fetching composable for better control over API requests.",
    details: "Set default options for external API calls to ensure consistency across the app.",
    link: "https://nuxt.com/docs/guide/recipes/custom-usefetch",
    icon: "i-heroicons-code-bracket-square-solid",
  },
  {
    title: "Repository Pattern",
    description: "Abstracts API calls and provides a structured way to manage data interactions.",
    details: "Implements a repository pattern in Nuxt, discussing the use of composables and $fetch.",
    link: "https://youtu.be/jXH8Tr-exhI?si=ko6E7v5ELVSQthrx",
    icon: "i-heroicons-cube-solid",
  },
  {
    title: "ESLint",
    description: "Code style enforcer with reasonable defaults and extensive support for various file types.",
    details: "Auto fix for formatting, works standalone without Prettier.",
    link: "https://github.com/antfu/eslint-config",
    icon: "i-heroicons-check-circle-solid",
  },
];
</script>

<template>
  <div class="flex flex-col gap-20">
    <section class="flex items-center text-center flex-col justify-between relative h-[90svh] max-h-[95svh]">
      <figure class="fade-in absolute top-0 right-0 z-[-1]">
        <NuxtImg
          src="/circle-blur.svg"
          alt="Circle Illustrations"
          class="blur-3xl opacity-15 scale-[400%]"
        />
      </figure>

      <div class="w-full h-1/2 absolute left-0 right-0 top-0 -z-[1] fade-in">
        <NuxtImg
          src="/dots.svg"
          alt="Dots Illustrations"
          class="animate-pulse w-full"
        />
        <NuxtImg
          src="/dots.svg"
          alt="Dots Illustrations"
          class="w-full"
        />
        <NuxtImg
          src="/dots.svg"
          alt="Dots Illustrations"
          class="w-full"
        />
      </div>

      <header class="w-full">
        <AppToggleTheme />
      </header>

      <div class="flex flex-col gap-1 items-center justify-center">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-green-500 space-x-2 lg:space-x-3 bg-gradient-to-r from-green-700 via-emerald-500 to-green-500 bg-clip-text text-transparent">
          <a
            target="_blank"
            href="https://nuxt.com/"
            class="underline hover:text-green-700 transition-all duration-200 focus:outline-green-700"
          >
            Nuxt 3
          </a>
          <span>+</span>
          <a
            target="_blank"
            href="https://ui.nuxt.com/"
            class="underline hover:text-green-700 transition-all duration-200 focus:outline-green-700"
          >
            Nuxt UI
          </a>
        </h1>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold">
          Starter Template
        </h2>
        <p class="text-lg lg:text-xl mt-2 2xl:w-3/5">
          Based on
          <a
            target="_blank"
            class="underline underline-offset-2 hover:text-slate-300 focus:outline-current"
            href="https://nuxt.new/"
          >
            Nuxt 3 and Nuxt UI
          </a>
          , with additional features to enhance your development experience.
        </p>

        <div class="flex items-center gap-3 mt-6">
          <UButton
            label="Take me a tour"
            color="emerald"
            variant="soft"
            to="/tour"
          >
            <template #leading>
              🎉
            </template>
          </UButton>
          <UButton
            label="View on GitHub"
            to="https://github.com/ersankarimi/nuxt3-ui-starter.git"
            trailing-icon="i-heroicons-arrow-right"
          />
        </div>
      </div>

      <UIcon
        name="i-heroicons-chevron-double-down"
        class="animate-bounce mt-6 hover:bg-transparent h-8 w-8 text-green-600 transition-all duration-200"
        :class="{ 'opacity-0': isScrolled }"
        to="#features"
      />
    </section>
    <section
      class="text-center relative"
    >
      <div class="flex flex-col gap-1">
        <h2
          class="text-3xl md:text-4xl lg:text-5xl font-bold"
        >
          Enhancements Included
        </h2>
        <p
          class="text-base lg:text-lg mt-2  text-green-500 bg-gradient-to-r from-green-700 via-emerald-500 to-green-500 bg-clip-text text-transparent"
        >
          Enjoy a selection of pre-set enhancements, designed to optimize and support your Nuxt 3 project
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
        <UCard
          v-for="enhancement in enhancements"
          :key="enhancement.title"
          :ui="{
            background: 'dark:bg-gray-900/25 bg-slate-100 backdrop-blur-sm',
          }"
        >
          <template #header>
            <UIcon
              :name="enhancement.icon"
              class="text-4xl dark:text-slate-200 text-green-600"
            />
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-slate-100">
              {{ enhancement.title }}
            </h3>
          </template>

          <div class="flex flex-col gap-2">
            <p class="text-base dark:text-slate-100">
              {{ enhancement.description }}
            </p>
            <p class="text-sm text-slate-700 dark:text-green-300">
              {{ enhancement.details }}
            </p>
            <UButton
              :to="enhancement.link"
              block
              label="Learn more"
              color="emerald"
              class="mt-2"
            />
          </div>
        </UCard>
      </div>

      <figure class="fade-in absolute bottom-0 left-0 z-[-1]">
        <NuxtImg
          src="/circle-blur.svg"
          alt="Circle Illustrations"
          class="blur-3xl opacity-10 scale-[400%]"
        />
      </figure>
    </section>

    <footer
      class="mt-10 text-center border-t-[0.25px] py-4 border-green-500 dark:border-green-100"
    >
      <div class="flex flex-col-reverse gap-4 items-center justify-center lg:flex-row lg:justify-between">
        <p class="text-sm text-green-500 dark:text-slate-100">
          Published under <a href="https://github.com/ersankarimi/nuxt3-ui-starter/blob/main/LICENSE" target="_blank" class="underline">MIT License</a>
        </p>
        <div class="flex items-center gap-3">
          <ULink
            to="https://codesandbox.io/s/github/ersankarimi/nuxt3-ui-starter/tree/main"
            class="text-sm text-green-500 dark:text-slate-100"
          >
            Playground
          </ULink>
        </div>
        <div class="flex items-center gap-3">
          <UButton
            to="https://github.com/ersankarimi/nuxt3-ui-starter"
            variant="ghost"
            icon="i-simple-icons-github"
          />
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
}
</style>
