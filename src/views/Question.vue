<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import Button from '@/components/Button.vue'
import sourceData from '@/data.json'

const props = defineProps<{
  slug: string,
  categoryId: number,
  questionId: number,
}>();

onBeforeMount(() => getQuestion())

const category = ref(null);
const question = ref(null);

const isAnswerVisible = ref(false);

function getQuestion() {
  if (props.slug === 'final-jeopardy') {
    category.value = sourceData.finalJeopardy;
    question.value = category.value.questions[0];
  } else {
    category.value = sourceData.categories.filter((c) => c.id === props.categoryId)[0];
    question.value = category.value.questions.filter((q) => q.id === props.questionId)[0];
  }
}

function toggleAnswer() {
  isAnswerVisible.value = !isAnswerVisible.value;
}
</script>

<template>
  <main>
    <Button @click="$router.back()">Back</Button>
    <h2>{{ category.name }}, {{ questionId }} Points</h2>
    <h3>{{ question.question }}</h3>
    <img v-if="question.image" :src="question.image.src" :alt="question.image.alt" />
    <audio v-if="question.audio" :src="question.audio" controls></audio>
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
