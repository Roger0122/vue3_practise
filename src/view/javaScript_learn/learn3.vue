<template>
  <main><h1>v-model</h1></main>
  <h2>v model</h2>
  <p>animal:{{animal}}</p>
  <p>{{animal.cat}}</p>
  <input v-model="animal.dog">



  <p v-if="show">show:123</p>
  <p v-else="!show">被隱藏</p>
  <MyButton type="primary" v-on:onClick="show = !show">V-if隱藏</MyButton>

  <p v-show="show2">v-show2:123</p>
  <!-- <button v-on:click="show2 = !show2">V-show隱藏</button> -->
  <MyButton type="primary" v-on:onClick="show2 = !show2">V-show隱藏</MyButton>

  <p>v-for 渲染結果</p>
  <p v-for="(value, key, index) in animal" :key="index" >{{key}}-{{value}}</p>


</template>

  <script setup lang="ts">

  import { ref } from 'vue';
  import MyButton from '@/view/ui/button.vue'

  const animal = ref({
    dog:'dog1',
    cat:'cat2',
    mouse:'mouse3',
    bird:'bird4',
    fish:'fish5',
  })
 

  const show = ref(true);
  const show2 = ref(true);


  </script>
  
  <style scoped>
  </style>