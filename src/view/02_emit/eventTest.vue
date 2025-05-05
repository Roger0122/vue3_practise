<template>
<div class="father">
<h1>我是父親組件</h1>
<h2>關於事件的回調</h2>


<MyButton type="primary" @onClick="handler">點我看看觸發原生DOM事件</MyButton>
<hr>
<MyButton type="primary" @onClick="handler2(1,2,3, $event)">可傳遞參數</MyButton>

<hr>
<Event1 @click="handler3"></Event1>
<hr>
<Event2 @sonEvent2="handler4" @click="handler5"></Event2>
</div>


</template>

<script setup>
import Event1 from './event1.vue';
import Event2 from './event2.vue';
import MyButton from '@/view/ui/button.vue'


// 原生DOM事件
const handler = () => {
  console.log(123);
}

// 可以傳遞參數
const handler2 = (a,b,c,$event) => {
  console.log(a,b,c,$event)
}


// 原生click 觸發子組件節點事件
const handler3 = () => {
  console.log("觸發了子組件的節點");
}

// 自定義事件 觸發 
const handler4 = (param1,param2) => {
  console.log(param1,param2)
}

// 自訂傳送參數
const handler5 = (pa1,pa2) => {
  console.log(pa1,pa2);
}

</script>

<style scoped>
.father{
  width: 400px;
  height: 200px;
  background: skyblue;
}
</style>