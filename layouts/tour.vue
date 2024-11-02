<template>
  <UContainer>
    <NuxtLoadingIndicator
      color="#64748b"
    />
    <AppHeader />
    <div
      class="py-4 lg:py-6 mt-20"
    >
      <slot />
    </div>
  </UContainer>
</template>
