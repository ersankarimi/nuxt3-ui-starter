<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import { z } from "zod";

definePageMeta({
  title: "Auth",
});

const schema = z.object({
  username: z.string().min(1, {
    message: "Username is required",
  }),
  password: z.string().min(8, "Must be at least 8 characters"),
});

type Schema = z.output<typeof schema>;

const { signIn, refresh, getSession } = useAuth();
const { clearToken, token, refreshToken, status, lastRefreshedAt } = useAuthState();

const loading = ref(false);
const state = ref<Schema>({
  username: "emilys",
  password: "emilyspass",
});

function handleClearToken() {
  clearToken();
  reloadNuxtApp();
}

async function handleRefresh() {
  try {
    loading.value = true;
    await refresh();
  }
  catch (error) {
    console.error(error);
  }
  finally {
    loading.value = false;
  }
}

async function onSubmit(event: FormSubmitEvent<Schema>) {
  try {
    loading.value = true;
    await signIn(event.data, { callbackUrl: "/tour/auth" },
    );
  }
  catch (error) {
    console.error(error);
  }
  finally {
    loading.value = false;
  }
}
</script>

<template>
  <div class="flex items-center justify-center">
    <UCard
      v-if="status === 'unauthenticated'"
      class="max-w-[500px] w-full"
    >
      <template #header>
        <UIcon
          name="i-heroicons-user-circle"
          class="text-4xl"
        />
        <div class="flex flex-col gap-1 mt-4">
          <h1
            class="text-2xl lg:text-3xl font-bold"
          >
            Login
          </h1>
          <p
            class="text-sm lg:text-base text-gray-500 dark:text-gray-400"
          >
            Welcome back! Please login to your account.
          </p>
        </div>
      </template>
      <UForm
        class="space-y-4"
        :schema="schema"
        :state="state"
        @submit="onSubmit"
      >
        <UFormGroup label="Username" name="username" required>
          <UInput
            v-model="state.username"
            placeholder="emilys"
          />
        </UFormGroup>

        <UFormGroup label="Password" name="password" required>
          <UInput
            v-model="state.password"
            type="password"
            placeholder="emilyspass"
          />
        </UFormGroup>
        <UButton
          type="submit"
          :loading="loading"
        >
          Submit
        </UButton>
      </UForm>
    </UCard>

    <UCard
      v-else
      class="max-w-[500px] w-full"
    >
      <template #header>
        <UIcon
          name="i-heroicons-user-circle"
          class="text-4xl"
        />
        <div class="flex flex-col gap-1 mt-4">
          <h1
            class="text-2xl lg:text-3xl font-bold"
          >
            Welcome back!
          </h1>
          <p
            class="text-sm lg:text-base text-gray-500 dark:text-gray-400"
          >
            You are already logged in.
          </p>
        </div>
      </template>
      <code>
        <pre
          class="text-sm lg:text-base text-gray-500 dark:text-gray-400 overflow-x-auto"
        >{{
          JSON.stringify({
            status,
            token,
            refreshToken,
            lastRefreshedAt,
          }, null, 2)
        }}</pre>
      </code>
      <div
        class="flex items-center gap-3 mt-4"
        :class="[
          loading ? 'opacity-50 pointer-events-none' : '',
        ]"
      >
        <UButton
          color="red"
          @click="handleClearToken"
        >
          Logout
        </UButton>
        <UButton
          color="blue"
          :loading="loading"
          @click="handleRefresh"
        >
          Refresh Token
        </UButton>
        <UButton
          color="green"
          @click="getSession"
        >
          Get Session
        </UButton>
      </div>
    </UCard>
  </div>
</template>
