<template>
<h2>JS 小練習:統計成年男女比</h2>

<p>期望結果:
成人總數：5 {{ adults.length }}
男性成人：3 {{ male.length }} {{ themale }}% （60%）
女性成人：2 {{ female.length }}{{ thefemale }}% （40%）
</p>



</template>

<script setup lang="ts">

// 範例資料:
const users = [
  { name: 'Alice', age: 17, gender: 'female' },
  { name: 'Bob', age: 22, gender: 'male' },
  { name: 'Charlie', age: 19, gender: 'male' },
  { name: 'Daisy', age: 25, gender: 'female' },
  { name: 'Ethan', age: 16, gender: 'male' },
  { name: 'Fiona', age: 21, gender: 'female' },
  { name: 'George', age: 30, gender: 'male' }
];

const adults = users.filter((e)=> e.age >= 18)
const male = users.filter((e)=> e.gender == 'male')
const female = users.filter((e)=> e.gender == 'female')

const themale =Math.round((male.length/adults.length)*100)
const thefemale =Math.round((female.length/adults.length)*100)



</script>

<style scoped>
</style>