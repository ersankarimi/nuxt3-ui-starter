<script setup lang="ts">
const colorMode = useColorMode();

const color = computed(() => colorMode.value === "dark" ? "#111827" : "#f1f5f9");

useHead({
  meta: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { key: "theme-color", name: "theme-color", content: color },
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
  ],
  htmlAttrs: {
    lang: "en",
  },
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-slate-100 dark:bg-gray-900 text-slate-900 dark:text-gray-100;
  transition: background-color 0.3s;
}
</style>
