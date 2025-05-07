<template>
<slot>默認有文字</slot>
<slot name="she"></slot>

<div>
<h1> 題目 1：找出陣列中重複的數字（JS）</h1>
<p>期望輸出結果:且產生新的陣列期望結果[1,2]</p>
<button @click="AnswerQ1">Q1答案對嗎</button>
<p>{{ NewNumberArray }}</p>
</div>

</template>
  
<script setup lang="ts">
import { ref } from 'vue';

  
const NumberArray = ref([1, 2, 3, 4, 2, 5, 1])
const NewNumberArray = ref([]);

const AnswerQ1 = () => {
  const seen = new Set();
  const result = new Set();

  for (const num of NumberArray.value) {
    if (seen.has(num)) {
      result.add(num);
    } else {
      seen.add(num);
    }
  }

  NewNumberArray.value = Array.from(result);
};
</script>


<style scoped>
</style>