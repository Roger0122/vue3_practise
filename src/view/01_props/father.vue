<template>
  <div class="father">
    <h1 >我是父親組件</h1>
    <p>{{ MoneyIsGood }}</p>
    <input type="text" v-model="MoneyIsGood">
    <hr>
    <sun message="你好啊兒子" :BigMoney="BigMoney" ></sun>
    <hr>
    <sun2 
      title="標題"
      :count= 10
      :items="['蘋果','香蕉','橘子']"
      :level="{level:1,color:'red',}"
        v-model="MoneyIsGood"
    >
    </sun2>
  </div>
  
</template>

<script setup>
  import { ref } from "vue";
  import sun from "./sun.vue";
  import sun2 from "./sun2.vue"
  let BigMoney = ref(10000)
  let MoneyIsGood = ref(0)

</script>

<style scoped>
 .father{
  width: 400px;
  height: 200px;
  background-color: gray;
  
 }
</style>