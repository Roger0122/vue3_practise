<template>
  <div class="flex px-3">
    <input type="text" placeholder="編號" v-model="NewPro.unNum">
    <input type="text" placeholder="品名" v-model="NewPro.ProName">
    <input type="text" placeholder="類型" v-model="NewPro.ProType">
    <button @click="addPro">新增</button>
  </div>

  <div class="px-4 mt-4">
    <ul class="flex font-bold">
      <li class="px-1 w-20">編號</li>
      <li class="px-1 w-40">品名</li>
      <li class="px-1 w-40">類型</li>
      <li class="px-1 w-40">操作</li>
    </ul>

    <ul v-for="item in ProList" :key="item.id" class="flex items-center my-1">
      <!-- 編號 -->
      <li class="px-1 w-20">
        <template v-if="editingId === item.id">
          <input v-model="editItem.unNum" class="w-full" />
        </template>
        <template v-else>
          {{ item.unNum }}
        </template>
      </li>

      <!-- 品名 -->
      <li class="px-1 w-40">
        <template v-if="editingId === item.id">
          <input v-model="editItem.ProName" class="w-full" />
        </template>
        <template v-else>
          {{ item.ProName }}
        </template>
      </li>

      <!-- 類型 -->
      <li class="px-1 w-40">
        <template v-if="editingId === item.id">
          <input v-model="editItem.ProType" class="w-full" />
        </template>
        <template v-else>
          {{ item.ProType }}
        </template>
      </li>

      <!-- 操作按鈕 -->
      <li class="px-1 w-40 flex gap-2">
        <template v-if="editingId === item.id">
          <button @click="saveEdit(item.id)">儲存</button>
          <button @click="cancelEdit">取消</button>
        </template>
        <template v-else>
          <button @click="startEdit(item)">編輯</button>
          <button @click="delPro(item.id)">刪除</button>
        </template>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const ProList = ref([
  { id: 1, unNum: 1, ProName: '漢堡', ProType: '食品' },
])

const NewPro = ref({
  unNum: '',
  ProName: '',
  ProType: ''
})

const editingId = ref(null)
const editItem = ref({
  id: '',
  unNum: '',
  ProName: '',
  ProType: ''
})

const addPro = () => {
  const newId = ProList.value.length
    ? Math.max(...ProList.value.map(p => p.id)) + 1
    : 1

  ProList.value.push({
    id: newId,
    unNum: NewPro.value.unNum,
    ProName: NewPro.value.ProName,
    ProType: NewPro.value.ProType
  })

  NewPro.value = { unNum: '', ProName: '', ProType: '' }
}

const delPro = (id) => {
  ProList.value = ProList.value.filter(item => item.id !== id)
}

const startEdit = (item) => {
  editingId.value = item.id
  editItem.value = { ...item } // 複製資料進編輯區
}

const cancelEdit = () => {
  editingId.value = null
  editItem.value = { id: '', unNum: '', ProName: '', ProType: '' }
}

const saveEdit = (id) => {
  const index = ProList.value.findIndex(item => item.id === id)
  if (index !== -1) {
    ProList.value[index] = { ...editItem.value }
  }
  cancelEdit()
}
</script>

<style scoped>
input {
  border: 1px solid #ccc;
  padding: 2px 4px;
}
</style>
