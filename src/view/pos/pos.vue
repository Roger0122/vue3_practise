<template>
  <h1>POS 練習</h1>

  <div>
    <h2>📦 商品展示區：</h2>
    <div class="grid grid-cols-2 gap-4">
      <div
        v-for="item in product"
        :key="item.id"
        class="border p-4 rounded shadow cursor-pointer hover:bg-gray-100"
        @click="addToCart(item)"
      >
        <h3 class="font-bold">{{ item.name }}</h3>
        <p>分類：{{ item.category }}</p>
        <p>價格：{{ item.price }} 元</p>
      </div>
    </div>
  </div>

  <div class="mt-6">
    <h2>🛒 購物車：</h2>
    <ul>
      <li v-for="item in cart" :key="item.id">
        {{ item.name }} x {{ item.quantity }} = {{ item.quantity * item.price }} 元
      </li>
    </ul>
    <p class="font-bold mt-2">總金額：{{ total }} 元</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const product = ref([
  {
    id: 1,
    name: "可樂",
    price: 25,
    category: "飲料",
  },
  {
    id: 2,
    name: "薯條",
    price: 35,
    category: "小吃",
  }
])

// 購物車資料
const cart = ref([])

// 加入購物車邏輯
function addToCart(item) {
  const existing = cart.value.find(p => p.id === item.id)
  if (existing) {
    existing.quantity += 1
  } else {
    cart.value.push({ ...item, quantity: 1 })
  }
}

// 總金額
const total = computed(() =>
  cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
)
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
</style>
