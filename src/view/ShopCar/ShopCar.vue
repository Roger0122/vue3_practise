<template>
  <ShopCarList>
    <template #header>
      <header>{{ user[0].name }} 的購物車</header>
    </template>

    <template #main>
      <main>買了: {{ user[0].price }}</main>
    </template>

    <template #footer>
      <footer>性別: {{ user[0].sex }}</footer>
    </template>
  </ShopCarList>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ShopCarList from '@/components/shop/ShopCarList.vue'  

const user = ref([
  {
    name: 'Roger',
    price: 0,
    sex: 'male',
  },
])
</script>
