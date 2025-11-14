<template>
<h2>Array.prototype.sort()</h2>

<div v-for="item in array1">
  <p>{{ item }}</p>
</div>

<div v-for="item2 in array2">
  <p>{{ item2 }}</p>
</div>

<div v-for="item3 in array3">
  <p>{{ item3 }}</p>
</div>

</template>

<script setup >
// 排序 sort (a, b)
const array1 = [1, 30, 4, 21, 100000]

let array2 = [...array1].sort((a,b) => b - a)
const array3 = array1.slice().sort((a,b) => a - b)



</script>

<style scoped>
</style>