import type { Product } from "@/types/product";

export const useProductStore = defineStore("product", () => {
  const productRef = ref<Product | null>(null);

  const product = computed(() => {
    return productRef.value;
  });

  function setProduct(newProduct: Product) {
    productRef.value = newProduct;
  };

  function clearproduct() {
    productRef.value = null;
  }

  return {
    product,
    productRef,
    setProduct,
    clearproduct,
  };
});
