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

  <span>Textarea: {{ Message }}</span>
  <div class="bg-red-200 px-4 py-2 rounded-lg">
    <textarea v-model.lazy="Message"></textarea>
  </div>
  <div class="bg-red-300 px-4 py-2 rounded-lg">
    <textarea>{{ Message }}</textarea>
  </div>

  <h2>radio</h2>
  <div>
    <input type="radio" v-model="picked" value="1" /> 1
    <input type="radio" v-model="picked" value="2" /> 2
    <input type="radio" v-model="picked" value="3" /> 3
  </div>
  <div>
    <span>選單選項: {{ picked }}</span>
  </div>
  
  <h2>checkbox</h2>
  <div>
    <input type="checkbox" id="Jack" v-model="checkNames" value="Jack">
    <label for="Jack">Jack</label>
    <input type="checkbox" id="John" v-model="checkNames" value="John">
    <label for="John">John</label>
    <input type="checkbox" id="Jane" v-model="checkNames" value="Jane">
    <label for="Jane">Jane</label>
    <input type="checkbox" id="Roger" v-model="checkNames" value="Roger">
    <label for="Roger">Roger</label>
  </div>
  <div>Data:{{ checkNames }}</div>


  <div>
    <input type="checkbox" id="isChecked" v-model="isChecked">
    <label for="isChecked">isChecked: {{ isChecked }}</label>
  </div>

</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const isChecked =ref (false)
const checkNames = ref([])
const Message =ref('Hello World')
const CanUser = ref(true)
const colorChange = ref(true)
const colorText = ref('紅色')
const isActive = ref(true)
const picked = ref(1);
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
