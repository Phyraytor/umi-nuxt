<script setup lang="ts">
  defineProps<{
    action: () => void
  }>();
</script>

<template>
  <button class="rounded bg-cyan-400 px-6 py-1 text-white" @click="action">
    <slot/>
  </button>
</template>

<style scoped>

</style>