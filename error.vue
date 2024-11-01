<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();

useSeoMeta({
  title: "Page not found",
  description: "We are sorry but this page could not be found.",
});

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

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="w-screen h-screen">
    <UContainer class="flex items-center justify-center h-full flex-col gap-1">
      <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold">
        {{ error.statusCode }}
      </h1>
      <p class="md:text-lg lg:text-xl">
        {{ error.message }}
      </p>

      <UButton
        label="Go back home"
        class="mt-4"
        variant="solid"
        color="primary"
        @click="handleError"
      />
    </UContainer>
  </div>
</template>
