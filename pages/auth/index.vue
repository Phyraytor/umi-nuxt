<script setup lang="ts">
import MainLayout from "~/layouts/MainLayout.vue"
import { useAuth } from "~/composables/auth";
const login = ref('')
const password = ref('')
const { signIn } = useAuth()
const auth = () => signIn({ login: login.value, password: password.value})
const { isLoggedIn } = useAuth()
if (isLoggedIn()) {
  navigateTo('/')
}
</script>
<template>
  <MainLayout>
    <div class="flex items-center justify-center min-h-screen">
      <div class="flex flex-col gap-3 w-80 mb-36">
        <label for="" class="flex flex-col gap-1">
          <span class="text-xs">Login</span>
          <input class="px-2 py-2 border-2 border-blue-50" type="text" v-model="login">
        </label>
        <label for="" class="flex flex-col gap-1">
          <span class="text-xs">Password</span>
          <input class="px-2 py-2 border-2 border-blue-50" type="text" v-model="password">
        </label>
        <button class="rounded bg-cyan-400 px-6 py-1 text-white" @click="auth">Sign in</button>
      </div>
    </div>
  </MainLayout>
</template>

<style scoped>

</style>
