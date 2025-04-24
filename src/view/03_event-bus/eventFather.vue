<template>
<div class="father">
<h1 >全局事件</h1>
  <div class="content">
  <Child1></Child1>
  <Child2></Child2>
  </div>
</div>
</template>

<script setup>
import Child1 from './child1.vue';
import Child2 from './child2.vue';

</script>

<style scoped>
.father{
  width: 300vw;
  height: 400px;
  background-color: darkorange;
}
.content{
  display: flex;
}
</style>
  