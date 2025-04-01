<template>
  <div class="sonEvent2">
    <h3>二兒子的自己定義事件</h3>
    <button @click="handler">點級我觸發自己定義事件</button>
    <button @click="emit('click','哈哈哈','呼呼呼')">自訂一參數 click</button>
  </div>
</template>

<script setup>
// 不需要引入可以直接使用 defineEmits
let emit = defineEmits(["sonEvent2","click"]);

//  事件類型，  第2第3位 為傳遞參數
const handler = () => {
  emit("sonEvent2","小花","作業寫完沒有?");
}



</script>

<style scoped>
.sonEvent2{
  width: 400px;
  height: 200px;
  background-color: greenyellow;
}
</style>