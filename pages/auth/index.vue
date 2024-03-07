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
        <UIInput label="Login" v-model="login" />
        <UIInput label="Password" v-model="password" />
        <UIButton :action="auth">Sign in</UIButton>
      </div>
    </div>
  </MainLayout>
</template>

<style scoped>

</style>
