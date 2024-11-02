<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{
  error: NuxtError & { cause?: FetchErrorResponse };
}>();

useSeoMeta({
  titleTemplate: (titleChunk) => {
    if (props.error.message || titleChunk) {
      return `${props.error.statusCode} Error | ${titleChunk || props.error.message}`;
    }

    return "Error";
  },
  description: props.error.message,
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
    <code>
      {{ console.dir(props.error) }}
    </code>
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
