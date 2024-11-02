import { productService } from "~/service/products";

export default defineNuxtPlugin(() => {
  const $service = {
    product: productService(),
  };
  return {
    provide: {
      service: $service,
    },
  };
});
