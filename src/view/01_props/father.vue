<template>
  <div class="father">
    <h1 >我是父親組件</h1>
    <hr>
    <sun message="你好啊兒子" :BigMoney="BigMoney"></sun>
  </div>
  
</template>

<script setup>
  import { ref } from "vue";
  import sun from "./sun.vue";
  let BigMoney = ref(10000)

</script>

<style scoped>
 .father{
  width: 400px;
  height: 200px;
  background-color: gray;
  
 }
</style>