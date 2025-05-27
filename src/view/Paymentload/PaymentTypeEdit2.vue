<template>
  <div>
    <ul>
      <li v-for="item in dataList" :key="item.key">
        {{ item.label }}
        <button @click="editBtn(item)">編輯</button>
        <button @click="del(item.key)">刪除</button>
      </li>
    </ul>
  </div>

  <div v-if="!showAdd">
    <button @click="showAdd = true">新增按鈕</button>
  </div>

  <div v-if="showAdd">
    <input type="text" placeholder="請輸入新增項目" v-model="newList.label" />
    <button @click="addNew">確定新增</button>
  </div>

  <div v-if="showEdit">
    <input type="text" placeholder="請輸入修改後內容" v-model="editItem.label" />
    <button @click="editNew">確認修改</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showAdd = ref(false)
const showEdit = ref(false)

const dataList = ref([
  { key: 1, label: '現金' },
  { key: 2, label: 'linePay' }
])

const newList = ref({
  key: null,
  label: ''
})

const editItem = ref({
  key: null,
  label: ''
})

// 新增功能
const addNew = () => {
  const newKey = dataList.value.length
    ? Math.max(...dataList.value.map(p => p.key)) + 1
    : 1

  dataList.value.push({
    key: newKey,
    label: newList.value.label
  })

  newList.value = { key: null, label: '' }
  showAdd.value = false
}

// 刪除功能
const del = (key) => {
  dataList.value = dataList.value.filter(item => item.key !== key)
}

// 按下編輯按鈕，準備編輯
const editBtn = (item) => {
  editItem.value = { ...item }
  showEdit.value = true
  showAdd.value = false
}

// 確定修改
const editNew = () => {
  const index = dataList.value.findIndex(i => i.key === editItem.value.key)
  if (index !== -1) {
    dataList.value[index].label = editItem.value.label
  }
  showEdit.value = false
  editItem.value = { key: null, label: '' }
}
</script>

<style scoped></style>
