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
  <div>台幣
    <input class='border-spacing-2'  type="text" v-model="twd"  />
    </div>
  <div>日幣
    <input class='border-spacing-2'  type="text" v-model="jpy"  />
  </div>
  <div>美金
    <input class='border-spacing-2'  type="text" v-model="usd"  />
  </div>

</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const CanUser = ref(true)
const colorChange = ref(true)
const colorText = ref('紅色')
const isActive = ref(true)
// 核心幣值（日圓），以它為基準進行雙向換算
const jpy = ref('')
const dollars = ref([
  {
    usd: 0.0065,
    jpy: 1,
    twd: 0.21,
  }
])
const checkboxChecked = ref(false) // ✔️ 綁定 checkbox 狀態
const colorReset = () => {
  colorChange.value = !colorChange.value
  colorText.value = colorChange.value ? '紅色' : '藍色'
}



// ✅ 台幣 = 日圓 * 0.21
const twd = computed({
  get: () => {
    const num = parseFloat(jpy.value)
    return isNaN(num) ? '' : (num * dollars.value[0].twd ).toFixed(0)
  },
  set: (val: string) => {
    const num = parseFloat(val)
    if (!isNaN(num)) {
      jpy.value = (num / 0.21).toFixed(3)
    }
  }
})

// ✅ 美金 = 日圓 * 0.0065（假設匯率）
const usd = computed({
  get: () => {
    const num = parseFloat(jpy.value)
    return isNaN(num) ? '' : (num * dollars.value[0].usd).toFixed(3)
  },
  set: (val: string) => {
    const num = parseFloat(val)
    if (!isNaN(num)) {
      jpy.value = (num / 0.0065).toFixed(3)
    }
  }
})



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
