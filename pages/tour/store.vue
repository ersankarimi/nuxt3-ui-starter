<script setup lang="ts">
definePageMeta({
  title: "Store",
  description: "Store",
});

const { $service } = useNuxtApp();
const { setProduct, clearproduct } = useProductStore();
const { product } = storeToRefs(useProductStore());
const loading = ref(false);

async function handleGetProduct() {
  try {
    loading.value = true;
    const data = await $service.product.getOne(1);
    setProduct(data);
  }
  catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
  finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="flex flex-col gap-10 text-center justify-center items-center">
    <h1
      class="text-4xl font-bold text-green-500"
    >
      Current Product
    </h1>
    <template
      v-if="product"
    >
      <code
        class="w-full overflow-hidden px-8"
      >
        <pre class="text-left px-8 overflow-scroll w-full max-h-96">{{ product }}
        </pre>
      </code>

      <UButton
        label="Clear Product"
        color="red"
        class="w-fit"
        @click="clearproduct"
      />
    </template>

    <UButton
      v-else
      label="Get Product"
      color="green"
      class="w-fit"
      :loading="loading"
      @click="handleGetProduct"
    />
  </div>
</template>
