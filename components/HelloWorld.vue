<template>
  <div class="flex items-center text-center h-full flex-col max-h-[100vh] overflow-clip">
    <svg
      width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg"
      class="absolute top-0 right-0 z-[-1] blur-3xl opacity-10 scale-150"
    >
      <rect width="500" height="500" rx="200" fill="url(#paint0_linear_1_12)" />
      <defs>
        <linearGradient id="paint0_linear_1_12" x1="-50.3597" y1="2.03756e-05" x2="653.308" y2="265.86" gradientUnits="userSpaceOnUse">
          <stop stop-color="#49EBF5" />
          <stop offset="1" stop-color="#04DB19" stop-opacity="0.7" />
        </linearGradient>
      </defs>
    </svg>

    <header class="w-full">
      <AppToggleTheme />
    </header>
    <div class="flex flex-col gap-1 flex-1 items-center justify-center">
      <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-green-500 space-x-4 transition-colors duration-200 bg-gradient-to-r from-green-700 via-emerald-500 to-green-500 bg-clip-text text-transparent">
        <ULink
          href="https://nuxt.com/"
          class="underline hover:text-green-700"
        >
          Nuxt 3
        </ULink>
        <span>+</span>
        <ULink
          href="https://ui.nuxt.com/"
          class="underline hover:text-green-700"
        >
          Nuxt UI
        </ULink>
      </h1>
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold">
        Starter Template
      </h2>
      <p class="text-lg lg:text-xl mt-2">
        A starter template for Nuxt 3, featuring Nuxt UI and additional enhancements.
      </p>

      <div class="flex items-center gap-3 mt-6">
        <UButton
          label="Take me a tour"
          color="primary"
          variant="soft"
        >
          <template #leading>
            🎉
          </template>
        </UButton>
        <UButton
          label="Get Started"
          to="https://github.com/ersankarimi/nuxt3-ui-starter.git"
          trailing-icon="i-heroicons-arrow-right"
        />
      </div>
    </div>
    <div class="w-full h-1/2 absolute left-0 right-0 top-0 -z-[1] fade-in">
      <img
        src="/dots.svg"
        alt="Dots Illustrations"
        class="animate-pulse"
      >
      <img
        src="/dots.svg"
        alt="Dots Illustrations"
        class=""
      >
      <img
        src="/dots.svg"
        alt="Dots Illustrations"
        class=""
      >
    </div>
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
