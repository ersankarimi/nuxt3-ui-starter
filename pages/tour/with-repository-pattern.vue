<script setup lang="ts">
import type { Product } from "@/types/product";

definePageMeta({
  title: "Repository Pattern",
});

const { $service } = useNuxtApp();

const product = ref<Product | null>(null);
const loading = ref<boolean>(true);
const { add } = useToast();

async function findProduct() {
  try {
    loading.value = true;
    product.value = await $service.product.getOne(1);
  }
  catch (error) {
    console.error(error);
  }
  finally {
    loading.value = false;
  }
}

async function updateProduct() {
  try {
    loading.value = true;
    product.value = await $service.product.update(1, {
      title: "Updated Title",
    });
    add({
      title: "Product Updated",
      description: "Product has been updated successfully",
    });
  }
  catch (error) {
    console.error(error);
  }
  finally {
    loading.value = false;
  }
}

onMounted(() => {
  findProduct();
});
</script>

<template>
  <UContainer class="max-h-[75svh] grid grid-cols-1 max-w-[75vw] gap-4 overflow-y-auto p-2">
    <div
      v-if="loading"
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
              :src="product?.images[0]"
              :alt="product?.title"
              class="w-full h-full object-contain"
            >
          </figure>
        </template>
        <ul
          class="flex flex-col gap-2"
        >
          <li class="text-lg font-semibold ">
            {{ product?.title }}
          </li>
          <li class="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
            {{ product?.description }}
          </li>
          <li class="text-sm font-semibold">
            {{
              Number(product?.price).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })
            }}
          </li>
        </ul>
      </UCard>

      <UButton
        label="Trigger Update Product"
        class="w-full"
        block
        @click="updateProduct"
      />
    </template>
  </UContainer>
</template>
