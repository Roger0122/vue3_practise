<template>
<h1 class=" text-3xl">常見資料型別Array、Object、Map、Set</h1>

<pre>
Array[]
Object{}
</pre>

<h2 class=" text-2xl">Map</h2>
<pre>
用途：像 Object 一樣用來存「鍵值對（key-value）」
差別：
Object 的 key 只能是字串或 Symbol
Map 的 key 可以是 任意型別（物件、函式、數字都可以）
常見方法：
map.set(key, value) → 新增或更新
map.get(key) → 取值value
map.has(key) → 檢查有沒有key回 布林
map.delete(key) → 刪除key,value
map.size → 元素數量 回應數量

const hello1 = new map()
hello1.set(id, '1')
</pre>


<h2 class=" text-2xl">Set</h2>

<pre>
用途: 像Array。 
可以自動刪除重複值,方法一樣可以使用

Set.add()
常見方法：
set.add(value) → 新增值
set.has(value) → 檢查有沒有
set.delete(value) → 刪除
set.size → 內容數量

</pre>
</template>

<script setup>
// Map
const hello1 = new Map()
const hello2 = hello1.set('id','1')
console.log('Map.set',hello2)
console.log('Map.get',hello1.get('id'))
console.log('Map.has',hello1.has('id'))
console.log('Map.delete','刪除')
console.log('Map.size', hello1.size)

// Set
const newSet = new Set()
newSet.add(1)
newSet.add(1)
newSet.add(2)
newSet.add(3)
newSet.add(4)

console.log('當前add後',newSet)
console.log('set.has', newSet.has(1));
console.log('set.delete', newSet.delete(2))
console.log('delete移除後', newSet)
console.log('setsize', newSet.size)
</script>

<style scoped>
</style>