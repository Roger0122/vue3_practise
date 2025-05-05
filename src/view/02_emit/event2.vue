<template>
  <div class="sonEvent2">
    <h3>二兒子的自己定義事件</h3>
    <MyButton type="primary" @onClick="handler">點我觸發自己定義事件</MyButton>
    <MyButton type="primary" @onClick="emit('click','哈哈哈','呼呼呼')">定義事件參數 click</MyButton>
  </div>
</template>

<script setup>
import MyButton from '@/view/ui/button.vue'


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