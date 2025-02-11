<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="p-2 mb-2 flex justify-center">
    <h1 class="text-2xl">Jeopardy</h1>
  </header>

  <Transition name="fade" mode="out-in">
    <RouterView />
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
