<template>
  <div class="grandson">
  <h1>孫子拿到了寵物 {{ animal }}</h1>
  <Mybutton type="primary" @onClick="changeanimal">點擊更換寵物</Mybutton>

  </div>
  </template>
  <script setup lang="ts">
  import { inject, ref } from 'vue'
  import Mybutton from '@/view/ui/button.vue'
  const clickTime = ref(0)
  const animal = inject('dog')
  
  const changeanimal = () =>{
    
    clickTime.value++
    if(clickTime.value %2 === 0){
      animal.value=('小狗')
    }else{
      animal.value=('小貓')
    }
  }

  </script>
  
  <style scoped>
  .grandson{
    width: auto;
    height: 50px;
    background-color: blue;
  }
  </style>