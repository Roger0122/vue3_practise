<template>
  <div :class="{ 'can-use': CanUser }">
    <p :class="colorChange ? 'red' : 'blue'">{{ colorText }}</p>

    <button
      :class="{ active: isActive, disabled: !isActive }"
      :disabled="checkboxChecked"
      @click="colorReset"
    >
      {{ isActive ? '啟用中' : '停用中' }}
    </button>
  </div>

  <!-- 勾選時不能點按鈕 -->
  <label>
    <input type="checkbox" v-model="checkboxChecked" />
    勾選後按鈕會被禁用
  </label>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const CanUser = ref(true)
const colorChange = ref(true)
const colorText = ref('紅色')
const isActive = ref(true)

const checkboxChecked = ref(false) // ✔️ 綁定 checkbox 狀態

const colorReset = () => {
  colorChange.value = !colorChange.value
  colorText.value = colorChange.value ? '紅色' : '藍色'
}
</script>

<style scoped>
.red {
  color: red;
}
.blue {
  color: blue;
}
.can-use {
  border: 1px solid #aaa;
  padding: 10px;
  margin-bottom: 10px;
}
.active {
  background-color: green;
  color: white;
}
.disabled {
  background-color: gray;
  color: white;
}
</style>
