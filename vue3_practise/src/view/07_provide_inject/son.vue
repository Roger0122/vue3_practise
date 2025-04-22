<template>
  <div class="son">
  <h1>兒子</h1>
  <grandson/>
  
  </div>
  </template>
  <script setup lang="ts">
  import grandson from "./grandson.vue"
  </script>
  
  <style scoped>
  .son{
    width: auto;
    height: 50px;
    background-color: purple;
  }
  </style>