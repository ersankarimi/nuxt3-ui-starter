<script setup lang="ts">
const colorMode = useColorMode();
const route = useRoute();

const color = computed(() => colorMode.value === "dark" ? "#111827" : "#f1f5f9");

useHead({
  titleTemplate: (titleChunk) => {
    if (route.meta.title || titleChunk) {
      return `${titleChunk || route.meta.title} | Nuxt 3 + Nuxt UI Starter Template`;
    }

    return "Home - Nuxt 3 + Nuxt UI Starter Template";
  },
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

const layout = computed(() => {
  const isTourRoute = route.path.includes("/tour");

  return isTourRoute ? "tour" : "default";
});
</script>

<template>
  <div class="font-manrope w-screen overflow-hidden">
    <NuxtLayout
      :name="layout"
    >
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
