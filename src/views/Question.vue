<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import Button from '@/components/Button.vue'
import sourceData from '@/data.json'

const props = defineProps<{
  categoryId: number,
  questionId: number,
}>();

onBeforeMount(() => getQuestion())

const question = ref(null);

const isAnswerVisible = ref(false);

function getQuestion() {
  const category = sourceData.categories.filter((c) => c.id === props.categoryId)[0];
  question.value = category.questions.filter((q) => q.id === props.questionId)[0];
}

function toggleAnswer() {
  isAnswerVisible.value = !isAnswerVisible.value;
}
</script>

<template>
  <main>
    <Button @click="$router.back()">Back</Button>
    <h1>Category {{ categoryId }}, {{ questionId }} Points</h1>
    <h2>{{ question.question }}</h2>
    <Button @click="toggleAnswer">
      <span v-if="!isAnswerVisible">Show</span>
      <span v-else>Hide</span>
       Answer
    </Button>
    <div v-if="isAnswerVisible">
      {{ question.answer }}
    </div>
  </main>
</template>

<style>
</style>
