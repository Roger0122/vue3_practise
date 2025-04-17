<template>
  <div class="daughter">
    <p>女兒有:{{ money }}元</p>
    <button @click="handler($parent)">父親給我1000元</button>

  </div>
  
  
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  let money = ref(300);
  
  const handler = ($parent)=>{
    money.value +=1000
    $parent.money -=1000
    console.log('謝謝老爸')
  }


  </script>
  
  
  <style scoped>
  .daughter{
    width: auto;
    height: 200px;
    background-color: palevioletred;
  }
  </style>