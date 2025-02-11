<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="p-2 mb-2 flex justify-center">
    <RouterLink :to="{name: 'home'}">
      <h1 class="text-2xl hover:text-gray-400">Jeopardy</h1>
    </RouterLink>
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
