<template>
<h2>JS 小練習</h2>
<p>主題：map, filter, reduce 高階函式應用。</p>
<p>map 用法>傳入一個函式，將陣列中的每個元素都應用這個函式，並返回一個新的陣列。</p>
{{ users.map((e) => e.name) }}
<p>filter 用法>傳入一個函式，將陣列中的每個元素都應用這個函式，並返回一個新的陣列，其中符合條件的元素會被保留。</p>
{{ users.filter((e) => e.age > 18) }}
<p>reduce 用法>傳入一個函式，將陣列中的每個元素都應用這個函式，並返回一個單一的結果。</p>
{{ users.reduce((acc, e) => acc + e.age, 0) }}

<p>計算出大於18歲的人名後 他們的平均年齡</p>
{{ names }}:{{ averageAge}}

</template>

  <script setup lang="ts">


  const users = [
  { name: 'Amy', age: 22 },
  { name: 'Bob', age: 17 },
  { name: 'Charlie', age: 30 }
  ]

  const adults = users.filter((e) => e.age > 18)
  const names = adults.map(user => user.name); 
  const totalAge = adults.reduce((acc, user) => acc + user.age, 0);
  const averageAge = totalAge / adults.length;
  


  </script>
  
  <style scoped>
  </style>