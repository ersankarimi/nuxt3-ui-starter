<script setup lang="ts">
const tourLinks = [
  { name: "Home", path: "/" },
  { name: "Auth", path: "/tour/auth" },
  { name: "Custom $fetch", path: "/tour/custom-fetch" },
  { name: "Custom useFetch", path: "/tour/custom-use-fetch" },
  { name: "With Repository Pattern", path: "/tour/with-repository-pattern" },
  { name: "Store", path: "/tour/store" },
];
</script>

<template>
  <header class="h-[var(--header-height)] flex items-center justify-between gap-4">
    <nav class="flex items-center justify-center flex-1">
      <ul class="flex items-center gap-8 font-medium">
        <li
          v-for="link in tourLinks"
          :key="link.name"
        >
          <ULink
            :to="link.path"
            inactive-class="text-slate-900 dark:text-slate-100"
            active-class="text-green-600 dark:text-green-500"
          >
            {{ link.name }}
          </ULink>
        </li>
      </ul>
    </nav>
    <AppToggleTheme />
  </header>
</template>
