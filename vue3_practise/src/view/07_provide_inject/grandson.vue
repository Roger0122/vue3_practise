<template>
  <div class="grandson">
  <h1>孫子拿到了寵物 {{ animal }}</h1>
  <button @click="changeanimal">點擊更換寵物</button>
  
  </div>
  </template>
  <script setup lang="ts">
  import { inject } from 'vue'
  const animal = inject('dog')
  
  const changeanimal = () =>{
    animal.value=('小貓')
  }

  </script>
  
  <style scoped>
  .grandson{
    width: auto;
    height: 50px;
    background-color: blue;
  }
  </style>