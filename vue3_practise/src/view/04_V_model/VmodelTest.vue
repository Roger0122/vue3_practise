<template>
<div class="father"> 
<h1>父組件關於V-model</h1>
<!-- 組件通信傳遞數據 父傳子 使用props  -->
<!-- 組件通信 子傳父 自定義事件 使用emit  -->
<h3>父親的錢錢:{{ money }}元</h3>
<h3>父親的錢2:{{ money2 }}元</h3>
<child1 info="你好啊兒子" :money=money  @click="info"></child1>
<!-- v-model 使用 雙向上述雙向綁定 同時給 子組件 傳遞props數據 以及 自定義事件 @click: -->
<child2 v-model:money2="money2" @click="info2"></child2>


</div>

</template>

<script setup>
import { ref } from 'vue';
import child1 from './child1.vue'
import child2 from './child2.vue'

let money = ref(10000)
let money2 = ref(20000)

const info = (parm1,parm2) =>{
  console.log(parm1,parm2)
  money.value=parm1
}

const info2 = (parm1,parm2) =>{
  console.log(parm1,parm2)
  money2.value= parm1
}

</script>

<style scoped>
.father{
  width: 200vw;
  height: auto;
  background-color:purple;
}
</style>