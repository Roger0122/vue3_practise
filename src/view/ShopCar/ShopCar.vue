<template>
  <button @click="show = !show">打開彈窗</button>
  <editShopModal v-if="show" @close="show = false">
    
    <template #header>
      <h2>購物車</h2>
    </template>

    <p>這是彈窗內文</p>

    <template #footer>
      <button @click="show = !show">關閉</button>
    </template>
  
  </editShopModal>
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
import editShopModal from '@/composites/shop/edit-shop-modal.vue'

const show = ref(false)
const user = ref([
  {
    name: 'Roger',
    price: 0,
    sex: 'male',
  },
])
</script>
