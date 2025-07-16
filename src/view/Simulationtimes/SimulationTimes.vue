<template>
  <h1>BMI 計算器</h1>
  <p>身高 (公分)</p>
  <input type="number" v-model.number="Nb1" />
  <p>體重 (公斤)</p>
  <input type="number" v-model.number="Nb2" />

  <button @click="btnHandler">計算</button>
  <p>BMI 結果：{{ bmiResult }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const Nb1 = ref(170); // 預設 170 cm
const Nb2 = ref(60);  // 預設 60 kg
const bmiResult = ref('請輸入資料');

const btnHandler = () => {
  if (Nb1.value <= 0 || Nb2.value <= 0) {
    bmiResult.value = '請輸入有效的身高與體重';
    return;
  }

  const heightInMeter = Nb1.value / 100;
  const bmi = Nb2.value / (heightInMeter * heightInMeter);
  bmiResult.value = bmi.toFixed(1);
};
</script>
