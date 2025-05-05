<template>
  <h1 class="child2">我是兒子2</h1>
  <Mybutton type="primary" @onClick="forSon1Money">給兒子1錢錢</Mybutton>

  </template>
  
  <script setup>
  //先引入物件
  import emitter from '../../../money';
  import Mybutton from '@/view/ui/button.vue'

  //  事件的回調
  const forSon1Money= (()=>{
    emitter.emit('money', { TWD: '10000元' })
  });

  </script>
  
  <style scoped>
  .child2{
    width: 300px;
    height: 300px;
    background-color: lightcoral;
  }
  </style>
  