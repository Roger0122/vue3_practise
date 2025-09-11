<template>
<h1 class=" text-3xl">陣列操作方法：map / filter / reduce / forEach / find</h1>

<pre>
  <h2 class=" text-2xl">Array.map</h2>
  Q:會改變原陣列嗎~?  A:會的,map會建立一個新的陣列。
  MDN!!:The current element being processed in the array. <b>creates new Array</b>

  範例:
  const Array1 =[1,2,3,4,5]
  const Array2 = Array1.map((x) => x * 2)

  A new array with each element being the result of the callback function.
  簡單來說 陣列每一個元素都會依照callback function 回調結果後，放入新的一個陣列。

  <h2 class=" text-2xl">Array.filter</h2>
  filter 淺拷貝 從 function 回調符合function 結果的元素。
  範例:
  const Array3 = ['live','food','money']
  const result = Array3.filter((x) => x ==='live' )
  未通過會傳回一個空陣列。 備註由於回調是function 也可以直接呼叫function去對每一個元素進行驗證。


  <h2 class="text-2xl">Array.reduce</h2>
  回調結果:單一的值
  reduce(累加值, 初始值(位置, 初始的值))
  const Array1 =[1,2,3,4,5]
  const Array2 = Array1.map((x) => x * x)
  拆解，比較像是制定初始的值,累加計算


  <h2 class="text-2xl">Array.forEach</h2>
  forEach 跟map差異是map會在其中每個值後  會回傳一個新的陣列。
  forEach() 總是返回 undefined


  <h2 class="text-2xl">Array.find</h2>
  find 找到第一個符合回傳，如果都沒有符合的回傳 undefined

  const Array1 = [3,10,20,30,90]
  const Array2 = array1.find((e) => e%3 = 1 ) // 預期10
  const Array3 = array2.find((e) => e >100 ) //預期undefined
</pre>

</template>

<script setup>
// map
const Array1 = [1, 2, 3, 4, 5]
const Array2 = Array1.map((x) => x*2)
console.log('Ar1',Array1)
console.log('Ar2',Array2)
// filter
const Array3 = ['live','food','money']
const result = Array3.filter((x) => x ==='live')
const result2 = Array3.filter((x) => x ==='xxx')
console.log('filter後',result)
console.log('filter後,若不存在將得到空值',result2)
// reduce
const Array4 = Array1.reduce((accumulator, currentValue) => accumulator + currentValue,0)
console.log('reduce',Array4)
// forEach
const Array5 = ['3', '10', '20' ,'30' ,'90']
const Array6 = Array5.forEach((e)=> e)
console.log('forEach',Array6)

// find
const Array7 = [3,10,20,30,90]
const Array8 = Array7.find((e) => e%3 == 1) // 預期10
const Array9 = Array7.find((e) => e >100 )  //預期undefined

console.log('find符合',Array8);
console.log('find未找到符合',Array9);
</script>

<style scoped>
</style>