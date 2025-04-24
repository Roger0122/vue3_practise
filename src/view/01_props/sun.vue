<template>
  <div class="sun">
    <p>我是子組件</p>
    <p>{{ message }}</p>
   <p>{{ BigMoney }}</p>
   
   <button @click="fatherGift"> 我看看父親給我甚麼</button>
  </div>
</template>


<script setup>
let props=  defineProps(['message','BigMoney'])
const fatherGift= () =>{
  console.log(props.BigMoney);
}


</script>

<style scoped>
.sun{
  width: 400px;
  height: 200px;
  background-color: blue;
}
</style>