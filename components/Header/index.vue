<script setup lang="ts">
import { useAuth } from "~/composables/auth";
const { logout } = useAuth()
const { isLoggedIn } = useAuth()
</script>
<template>
  <header class="w-full box-shadow py-4 bg-cyan-400  min-h-20">
    <div class="flex justify-between mx-auto w-[1000px] text-2xl mx-auto" v-if="isLoggedIn()">
      <div class="flex items-center gap-2">
        <NuxtLink to="/" class="rounded  px-6 py-1 text-white inline-flex">
          Profile
        </NuxtLink>
        <NuxtLink to="/products" class="rounded px-6 py-1 text-white inline-flex">
          Products
        </NuxtLink>
        <NuxtLink to="/dishes" class="rounded px-6 py-1 text-white inline-flex">
          Dishes
        </NuxtLink>
      </div>
      <button @click="logout" class="flex rounded bg-cyan-400 px-6 py-1 text-white items-center">
        Logout
      </button>
    </div>
  </header>
</template>

<style scoped>

</style>
