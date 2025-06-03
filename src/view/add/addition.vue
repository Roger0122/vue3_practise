<template>
  <div><h2>加減法</h2></div>
<div><input type="number" placeholder="加多少" v-model="addNum">
  <button @click="addhandler">加多少</button></div>
<div>
  <input type="number" placeholder="減多少" v-model="subNum">  
  <button @click="subhandler">減多少</button></div>
<div><button @click="clickhandler">清除</button></div>
<div>
<p>
結果: {{ result }}  
</p>
</div>

</template>

<script setup>
import { ref } from 'vue'

const result =ref(0);
const addNum = ref(0);
const subNum = ref(0);

const addhandler = () => {
  if(addNum.value !== 0){
    result.value += addNum.value  
  }
  addNum.value=0
}




const subhandler = () =>{
  if(subNum !== 0){
    result.value -= subNum.value
  }
  subNum.value=0
}


const clickhandler = () =>{
  result.value = 0
}


</script>
