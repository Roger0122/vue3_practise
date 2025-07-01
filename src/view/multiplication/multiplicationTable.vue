<template>
<h2>99乘法表</h2>


<div class="flex">
<ul v-for="Num in 乘數">
  <li v-for="Num2 in 被乘數">
    <li class="px-1">{{ Num }} X {{ Num2 }}={{ Num*Num2 }} </li>
  </li>
</ul>

</div>


</template>

<script setup >

const 乘數 = [1,2,3,4,5,6,7,8,9]
const 被乘數 = [1,2,3,4,5,6,7,8,9]


</script>

<style scoped>
</style>