<template>
  <div class="father">
    <h1>父親有:{{ money }}元</h1>
    <button @click="handler">跟兒子借錢借1000元</button>
    <son ref="sonMoney"></son>
    <daughter></daughter>
  </div>  
</template>

<script setup lang="ts">
import { ref } from 'vue';
import son from './son.vue'
import daughter from './daughter.vue'




let money = ref(10000);
let sonMoney= ref()

const handler = () => {
  
  console.log(sonMoney)

  if(sonMoney.value.money > 0){
  money.value +=1000
  sonMoney.value.money-=1000
  } else {
    alert ('沒錢了父親')
  }
  sonMoney.value.run()
  
}

defineExpose({
  money
})


</script>

<style scoped>
.father{
  width: auto;
  height: auto;
  background-color: red;
}

</style>

