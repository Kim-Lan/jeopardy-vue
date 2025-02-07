import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useVisitedStore = defineStore('visited', () => {
  const visited = ref([]);

  function add(categoryId: number, questionId: number): void {
    visited.value.push({ categoryId, questionId });
  }

  function includes(categoryId: number, questionId: number): boolean {
    return visited.value.some(e => e.categoryId === categoryId && e.questionId === questionId);
  }

  function reset(): void {
    visited.value = [];
  }

  return { visited, add, includes, reset }
})
