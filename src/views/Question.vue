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
  <main class="w-full md:w-3/4 lg:w-1/2 mx-auto px-4 flex flex-col justify-center text-center gap-8">
    <Button
      @click="$router.back()"
      class="self-start"
    >
      Back
    </Button>

    <h2 class="text-xl">
      {{ category.name }}, {{ questionId }} Points
    </h2>

    <h3 class="text-2xl font-bold">
      {{ question.question }}
    </h3>

    <img
      v-if="question.image"
      :src="question.image.src"
      :alt="question.image.alt"
      class="mx-auto"
    />

    <audio
      v-if="question.audio"
      :src="question.audio"
      controls
      class="mx-auto"
    ></audio>

    <Button
      @click="toggleAnswer"
      class="mx-auto"
    >
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
