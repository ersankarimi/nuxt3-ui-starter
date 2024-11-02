<script setup lang="ts">
import type { Product } from "@/types/product";
import type { Response } from "@/types/response";

definePageMeta({
  title: "Custom Fetch",
});

const { $api } = useNuxtApp();

/**
 * If you have not fetched data on the server (for example, with server: false), then the data will not be fetched until hydration completes. This means even if you await useAsyncData on the client side, data will remain null within <script setup> (https://nuxt.com/docs/api/composables/use-async-data).
 *
 * You can remove the await keyword to display the Loading element (on first render).
 */
const { data, status } = await useAsyncData<
  Response<Product[], "products">
>("products", () => $api("/product", {
  query: {
    skip: 0,
    limit: 10,
  },
}));
</script>

<template>
  <div class="max-h-[75svh] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto p-2">
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
        v-for="product in data?.products"
        :key="product.id"
        :product="product"
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
              :src="product.images[0]"
              :alt="product.title"
              class="w-full h-full object-contain"
            >
          </figure>
        </template>
        <ul
          class="flex flex-col gap-2"
        >
          <li class="text-lg font-semibold ">
            {{ product.title }}
          </li>
          <li class="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
            {{ product.description }}
          </li>
          <li class="text-sm font-semibold">
            {{
              Number(product.price).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
            }}
          </li>
        </ul>
      </UCard>
    </template>
  </div>
</template>
