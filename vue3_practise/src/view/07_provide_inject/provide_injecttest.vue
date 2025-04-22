<template>
<div class="father">
<h1>父親養的 {{ animal }}</h1>
<son></son>

</div>
</template>
<script setup lang="ts">
import son from './son.vue'
import { ref, provide }from 'vue'
// 可以傳遞給 子孫輩
const animal= ref('小狗')

provide("dog",animal);

</script>

<style scoped>
.father{
  width: auto;
  height: 300px;
  background-color: gray;
}
</style>