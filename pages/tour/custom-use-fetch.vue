<script setup lang="ts">
import type { Product } from "@/types/product";

definePageMeta({
  title: "Custom Fetch",
});

/**
 * If you have not fetched data on the server (for example, with server: false), then the data will not be fetched until hydration completes. This means even if you await useAsyncData on the client side, data will remain null within <script setup> (https://nuxt.com/docs/api/composables/use-async-data).
 *
 * You can remove the await keyword to display the Loading element (on first render).
 *
 * Change the id to 999 to see error handling.
 */
const { data, status, error } = await useAPI<Product>("/products/1", {
  default: () => null,
});

if (error.value) {
  /**
   * It will trigger the error full screen page.
   * Check the error.vue file in the pages directory.
   */
  console.error(error.value.data?.message);
  showError(
    {
      statusCode: error.value.statusCode,
      message: error.value.data?.message,
    },
  );
}
</script>

<template>
  <UContainer class="max-h-[75svh] grid grid-cols-1 max-w-[75vw] gap-4 overflow-y-auto p-2">
    <div
      v-if="status === 'pending'"
      class="h-36"
    >
      <p>
        Loading ...
      </p>
    </div>
    <template
      v-else
    >
      <UCard
        :ui="{
          base: 'overflow-hidden',
          rounded: 'rounded-xl',
          header: {
            background: 'dark:bg-gray-950 bg-slate-100',
            padding: 'p-0 sm:p-0',
          },
        }"
      >
        <template #header>
          <figure
            class="w-full h-36 flex items-center justify-center overflow-clip"
          >
            <img
              :src="data?.images[0]"
              :alt="data?.title"
              class="w-full h-full object-contain"
            >
          </figure>
        </template>
        <ul
          class="flex flex-col gap-2"
        >
          <li class="text-lg font-semibold ">
            {{ data?.title }}
          </li>
          <li class="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
            {{ data?.description }}
          </li>
          <li class="text-sm font-semibold">
            {{
              Number(data?.price).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
            }}
          </li>
        </ul>
      </UCard>
    </template>
  </UContainer>
</template>
