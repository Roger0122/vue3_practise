<template>
  <div class="child2">
  <p>兒子2</p>
  <p>{{ money2 }}元</p>
  <!-- <button @click="givefathermoney">給爸爸4000元</button> -->
  <Mybutton  type="primary" @onClick="givefathermoney">給爸爸4000元</Mybutton>
  </div>
  
  </template>
  
  <script setup>
  import Mybutton from '@/view/ui/button.vue'
const props = defineProps(['money2'])
const emit = defineEmits(['update:money2','click'])

 const givefathermoney = () =>{
  emit('update:money2',props.money2 + 4000);
  emit('click', props.money2 + 4000, '給了') // 同時回傳訊息
 }

  
  </script>
  
  <style scoped>
  .child2{
    width: 200px;
    height: auto;
    background: pink;
  }
  </style>