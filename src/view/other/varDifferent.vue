<template>
<h2 class="text-2xl">變數宣告差異（var / let / const） </h2>
<pre>
let var const 差異,基本var 不用(容易汙染變成全域變數,let=變數意旨可以被變更,const=常數=不可被變更)
良好的專案基本上使用let 以及const 就可以 var基本上老舊專案才有可能使用。
真實理解
var =全域變數,
let ,const 區域變數,
舉例

function  name(){
const a = 1
let b = 1
return (a+b)  結果應該是 2 吧~
console.log(function()) 結果會是2

</pre>
</template>

<script setup>
function fnname(){
  const a = 1
  let b =1
  return a+b
}
console.log(fnname())


</script>

<style scoped>
</style>