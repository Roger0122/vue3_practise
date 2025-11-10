<template>
<h2>{{ props.title }}</h2>

<div v-for ="item in items" :key="item.No">
  <p>{{ item.name}} {{ item.No }} 解釋:{{ item.label }}</p> 
</div>




</template>

<script setup>
import {  defineProps } from "vue";


const props = defineProps({
  title: {
        type: String,      
  },
})


const items = [
{ name:'實體層', No:1, label:'實際存在實體物件(網卡等等)轉換器0轉1等等' },
{ name:'資料層', No:2, label:'資料存儲的實體存裝置LLC MLC等等協定', },
{ name:'網路層', No:3, label:'網路位置IP位置,地址'},
{ name:'傳輸層', No:4, label:'TCP/協定 傳送資料'},
{ name:'會議層', No:5, label:'建立網路協定完成後中斷,(資料傳輸完成後)' },
{ name:'工作層/展示層', No:6, label:'ASCII編碼 編譯 轉譯 獲得資料的層級'},
{ name:'應用層', No:7, label:'應用軟體,線上遊戲等等'},
]


// Layer 7: Application    [HTTP, DNS, SSH]
// Layer 6: Presentation   [TLS, Compression]
// Layer 5: Session        [Auth, Connections]
// Layer 4: Transport      [TCP, UDP]
// Layer 3: Network        [IP, Routing]
// Layer 2: Data Link      [Ethernet, MAC]
// Layer 1: Physical       [Cables, Signals]

</script>

<style scoped>
</style>