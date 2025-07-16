<template>
<h2>99乘法表</h2>


<div class="flex">
<ul v-for="Num in 乘數">
  <li v-for="Num2 in 被乘數">
    <li class="px-1">{{ Num }} X {{ Num2 }}={{ Num*Num2 }} </li>
  </li>
</ul>
</div>

<h2>預算計算</h2>
<p>預算 {{ cost }}元</p>
<p>花費 {{  Pay }}元</p>
<p>日期 7月{{ date }}日</p>
<p>剩餘預算{{ cost - Pay }}</p>
<p>日均 {{ Pay / date}}</p>
<p>日均預算使用狀況 {{ 日均計算 }}</p>

</template>

<script setup >
import { ref } from 'vue'

const 乘數 = [1,2,3,4,5,6,7,8,9]
const 被乘數 = [1,2,3,4,5,6,7,8,9]
const 日均計算 = ref(0)

const cost = ref(5000)
const Pay = ref(3214)
const date = ref(16)

const 日均可使用預算 = ref(250)
日均計算.value = 日均可使用預算.value/(Pay.value/date.value)

</script>

<style scoped>
</style>