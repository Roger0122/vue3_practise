<template>
<h1 class="child1">我是兒子1</h1>

</template>

<script setup>
import { onMounted } from 'vue';
import emitter from '../../../money';

// 組件掛載完成後 接收
onMounted(()=>{
  emitter.on('money', e => 
  console.log('money', e) )
})

</script>

<style scoped>
.child1{
  width: 300px;
  height: 300px;
  background-color: gray;
}
</style>
