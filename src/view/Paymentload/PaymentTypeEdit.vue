<template>
  <div>
    <table class="bk">
      <thead>
        <tr>
          <th v-for="column in COLUMNS" :key="column.key">
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in paymentTypeList" :key="item.key">
          <td>{{ item.label }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.PayD }}</td>
          <td>
            <button @click="toggleEdit(item)">編輯</button>
            <button @click="delhandler(item.key)">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>

    <button @click="addNewPayType" class="bk">新增付款方式</button>

    <!-- 新增區塊 -->
    <div v-if="addPayType">
      <h4>新增付款方式</h4>
      <input type="text" placeholder="付款方式" v-model="newPay.label">
      <input type="text" placeholder="付款類別" v-model="newPay.type">
      <input type="text" placeholder="幣別" v-model="newPay.PayD">
      <button @click="createHandler">確定新增</button>
    </div>

    <!-- 編輯區塊 -->
    <div v-if="editPayType">
      <h4>編輯付款方式</h4>
      <input type="text" placeholder="付款方式" v-model="editPay.label">
      <input type="text" placeholder="付款類別" v-model="editPay.type">
      <input type="text" placeholder="幣別" v-model="editPay.PayD">
      <button @click="updateHandler">確認修改</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const addPayType = ref(false)
const editPayType = ref(false)

const newPay = ref({
  label: '',
  type: '',
  PayD: ''
})

const editPay = ref({
  key: null,
  label: '',
  type: '',
  PayD: ''
})

// 資料來源
const paymentTypeList = ref([
  { key: 1, label: '現金', type: '現金', PayD: 'TWD' },
  { key: 2, label: 'LinePay', type: 'LinePay', PayD: 'TWD' }
])

const COLUMNS = [
  { key: 'PaymentType', label: '付款方式' },
  { key: 'PayKind', label: '付款類別' },
  { key: 'PayD', label: '幣別' },
  { key: 'edit', label: '操作' }
]

// 點擊新增顯示輸入框
const addNewPayType = () => {
  addPayType.value = true
  editPayType.value = false
}

// 新增處理
const createHandler = () => {
  const newKey = paymentTypeList.value.length
    ? Math.max(...paymentTypeList.value.map(p => p.key)) + 1
    : 1

  paymentTypeList.value.push({
    key: newKey,
    label: newPay.value.label,
    type: newPay.value.type,
    PayD: newPay.value.PayD
  })

  newPay.value = { label: '', type: '', PayD: '' }
  addPayType.value = false
}

// 刪除處理
const delhandler = (key) => {
  paymentTypeList.value = paymentTypeList.value.filter(item => item.key !== key)
}

// 開始編輯：顯示輸入欄，並填入該筆資料
const toggleEdit = (item) => {
  editPay.value = { ...item }
  editPayType.value = true
  addPayType.value = false
}

// 確定更新處理
const updateHandler = () => {
  const index = paymentTypeList.value.findIndex(item => item.key === editPay.value.key)
  if (index !== -1) {
    paymentTypeList.value[index] = { ...editPay.value }
  }

  editPayType.value = false
  editPay.value = { key: null, label: '', type: '', PayD: '' }
}
</script>

<style scoped>
.bk {
  background-color: aqua;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid black;
  padding: 8px;
}
input {
  margin: 5px;
}
</style>
