<template>
  <!-- 搜尋列 -->
  <div>
    搜尋列
    <input type="text" placeholder="輸入搜尋" v-model="seach">
    <button class="px-1" @click="seachResult">搜尋</button>
    <button @click="clearSearch">清除</button>
  </div>

  <!-- 資料按鈕 -->
  <div>
    <button @click="giveMeData">給我資料</button>
  </div>

  <!-- 資料展示 -->
  <ul>
    <li v-for="item in BackData" :key="item.locationName">
      {{ item.locationName }}：{{ item.description }}
    </li>
  </ul>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'

const originalData = ref([])
const BackData = ref([])
const seach = ref('')

// 取得資料並格式化
const giveMeData = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/weather')
    const parsed = res.data.records.location.map(location => {
      const locationName = location.locationName

      const wxElement = location.weatherElement.find(el => el.elementName === 'Wx')
      const description = wxElement?.time?.[0]?.parameter?.parameterName ?? '無資料'

      return {
        locationName,
        description
      }
    })

    originalData.value = parsed
    BackData.value = parsed
  } catch (err) {
    console.error('取得資料錯誤:', err)
  }
}


const seachResult = () => {
  BackData.value = originalData.value.filter(el =>
    el.locationName.includes(seach.value)
  )
}


const clearSearch = () => {
  seach.value = ''
  BackData.value = originalData.value
}


giveMeData()
</script>

<style scoped>
</style>
