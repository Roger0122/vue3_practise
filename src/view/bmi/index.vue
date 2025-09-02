<template>
<h1>BMI 計算順便練習props(父傳子:數據) 跟emit(子傳父:事件)傳遞</h1>

<div>
<p>身高</p>
<input type="number" v-model="height" placeholder="請輸入身高">
<p>體重</p>
<input type="number" v-model="weight" placeholder="請輸入體重">

<div>
<Mybotton type="primary" @onClick="calc">計算</Mybotton>
</div>
<result :bmi="bmi ?? 0" :height="height ?? 0" :weight="weight ?? 0"  @reset="resetForm"></result>


</div>

</template>

<script setup lang="ts">
import Mybotton from '@/view/ui/button.vue'
import { ref } from 'vue';
import  result from '@/view/bmi/result.vue' 

const height =ref();
const weight =ref();
const bmi =ref();

const calc = () =>{
  bmi.value = Number(weight.value / (height.value / 100)**2)
  bmi.value = Number(bmi.value.toFixed(2))

  //  emit('calc',bmi.value)
}

const resetForm = () =>{
  height.value = 0;
  weight.value = 0;
  bmi.value = 0;
}

</script>

<style scoped>

</style>