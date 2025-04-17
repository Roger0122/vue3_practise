<template>
<div class="son">
  <p>兒子有:{{ money }}元</p>
</div>


</template>

<script setup lang="ts">
import { ref } from 'vue';

let money = ref(5000);

const run = () => {
  console.log('可以跑步')
}

defineExpose({
 money,
 run
})


</script>


<style scoped>
.son{
  width: auto;
  height: 200px;
  background-color: gray;
}
</style>