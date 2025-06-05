<template>
  <div class="p-4 bg-white rounded shadow w-[500px] space-y-4">
    <!-- 標題與價格 -->
    <div class="flex justify-between items-center text-xl font-bold">
      <span>柚子氣泡飲</span>
      <span class="text-orange-500">$60</span>
    </div>
    <input class="  bg-green-500 w-full">
    <!-- 冰塊選項 -->
    <div>
      <div class="grid grid-cols-6 gap-2">
        <button
          v-for="opt in chList.ice"
          :key="opt"
          @click="selected.ice = opt"
          :class="[
            'py-1 px-2 rounded border',
            selected.ice === opt ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'
          ]"
        >
          {{ opt }}
        </button>
      </div>
    </div>

    <!-- 甜度選項 -->
    <div>
      <div class="grid grid-cols-6 gap-2">
        <button
          v-for="opt in chList.sugar"
          :key="opt"
          @click="selected.sugar = opt"
          :class="[
            'py-1 px-2 rounded border',
            selected.sugar === opt ? 'bg-blue-500 text-white' : 'bg-white text-gray-800'
          ]"
        >
          {{ opt }}
        </button>
      </div>
    </div>

    <!-- 配料選項 -->
    <div>
      <div class="grid grid-cols-3 gap-2">
        <button
          v-for="opt in chList.toppings"
          :key="opt.label"
          @click="toggleTopping(opt.label)"
          :class="[
            'py-1 px-2 rounded border text-sm',
            selected.toppings.includes(opt.label)
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-800'
          ]"
        >
          {{ opt.label }}<span v-if="opt.price"> +{{ opt.price }}</span>
        </button>
      </div>
    </div>

    <!-- 儲存按鈕 -->
    <div class="text-center pt-2">
      <button @click="saveBtn" class="bg-teal-700 text-white px-6 py-2 rounded w-full">儲存</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const chList = ref({
  ice: ['正常冰', '少冰', '微冰', '去冰', '溫', '加熱'],
  sugar: ['正常糖', '少糖', '微糖', '半糖', '一分糖', '無糖'],
  toppings: [
    { label: '無加料' },
    { label: '珍珠', price: 10 },
    { label: '愛玉', price: 10 },
    { label: '水果', price: 50 },
    { label: '水蜜桃', price: 50 },
    { label: '脆脆片', price: 50 },
    { label: '蜜蘋果', price: 50 },
    { label: '哈密瓜', price: 50 },
    { label: '西瓜', price: 50 },
    { label: '奶霜', price: 30 },
    { label: '蜜吐司', price: 30 },
    { label: '雙倍', price: 40 },
  ]
})

const selected = ref({
  ice: '',
  sugar: '',
  toppings: []
})

function toggleTopping(label) {
  const idx = selected.value.toppings.indexOf(label)
  if (idx === -1) {
    selected.value.toppings.push(label)
  } else {
    selected.value.toppings.splice(idx, 1)
  }
}


</script>
