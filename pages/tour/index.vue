<script setup lang="ts">
definePageMeta({
  title: "Tour",
});
</script>

<template>
  <div class="mt-12 flex flex-col items-center justify-center space-y-8">
    <UCard class="text-center flex-1 shadow-lg p-8 max-w-3xl w-full">
      <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-green-500 mb-4">
        <span class="block">Hi there!</span>
        <span>Welcome to the Tour Page</span>
      </h1>

      <h2 class="text-2xl lg:text-3xl font-semibold mt-4">
        Discover the features of our platform
      </h2>

      <p class="text-lg lg:text-xl mt-6">
        Select a page from the navigation to begin exploring each section. Dive into the details and get the most out of your experience!
      </p>
    </UCard>
  </div>
</template>
