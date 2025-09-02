<template>
  <h1>BMI 結果分析</h1>
  
  <div>
  <p>您的BMI= {{ props.bmi }}</p>
  
  <p v-if= "props.bmi < 10 "></p>
  <p v-else-if="props.bmi < 18.5">體重過輕</p>
  <p v-else-if="props.bmi < 24">健康體位</p>
  <p v-else-if="props.bmi < 27">輕度肥胖</p>
  <p v-else-if="props.bmi < 30">中度肥胖</p>
  <p v-else-if="props.bmi < 35">重度肥胖</p>
  <p v-else>重度肥胖</p>

  
  </div>
  <MyButton type="primary" @onClick="emit('reset')">重設</MyButton>

  </template>
  
  <script setup lang="ts">
  import MyButton from '@/view/ui/button.vue'
  const props = defineProps({
    bmi: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
  });

  const emit = defineEmits(['reset']);

  
  </script>
  
  <style scoped>
  
  </style>