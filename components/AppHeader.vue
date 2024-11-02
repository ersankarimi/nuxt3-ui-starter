<script setup lang="ts">
const tourLinks = [
  { name: "Auth", path: "/tour/login" },
];
</script>

<template>
  <header class="h-[var(--header-height)] flex items-center justify-between gap-4">
    <nav class="flex items-center justify-center flex-1">
      <ul class="flex items-center gap-3 font-medium">
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
