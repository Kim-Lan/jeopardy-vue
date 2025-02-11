<script setup lang="ts">
import Button from '@/components/Button.vue'
import sourceData from '@/data.json'
import { useVisitedStore } from '@/stores/visited'

const visited = useVisitedStore();

function addVisited(categoryId, questionId) {
  visited.add(categoryId, questionId);
}

function isVisited(categoryId, questionId) {
  return visited.includes(categoryId, questionId);
}

function resetVisited() {
  visited.reset();
}

function getFinalJeopardyParams() {
  const finalJeopardy = sourceData.finalJeopardy;
  const categoryId = finalJeopardy.id;
  const questionId = finalJeopardy.questions[0].id;
  return { categoryId, questionId, slug: 'final-jeopardy'};
}
</script>

<template>
  <main class="flex flex-col gap-4">
    <table class="mx-auto text-center border-1 border-gray-200 border-collapse">
      <thead>
        <tr>
          <th class="p-2 border-1 border-gray-200" v-for="category in sourceData.categories">{{ category.name }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="questionId in sourceData.points">
          <td class="p-2 border-1 border-gray-200" v-for="category in sourceData.categories">
            <RouterLink
              :to="{ name: 'question', params: { categoryId: category.id, slug: category.slug, questionId} }"
              @click="addVisited(category.id, questionId)"
              :class="{ visited: isVisited(category.id, questionId) }"
            >
              {{ questionId }}
            </RouterLink>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-center gap-2">
      <RouterLink
        :to="{ name: 'question', params: getFinalJeopardyParams() }"
      >
        <Button>
          Final Jeopardy
        </Button>
      </RouterLink>
      <Button
        @click="resetVisited"
      >
        Reset
      </Button>
    </div>

  </main>
</template>

<style scoped>
.visited {
  text-decoration: line-through;
  color: var(--color-gray-400);
}
</style>
