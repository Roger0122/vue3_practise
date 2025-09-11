<template>
<h1 class="text-3xl">ES6 語法：解構賦值、展開運算子（...）、模板字串　</h1>


<h2 class="text-2xl">解構賦值</h2>
<pre>
從變數拿東西出來使用 舉例

const myId  = {
id: 1,
name: 'Roger',
label: '30歲',
}

const { id, name } = myId
console.log(id,name, label) 將會得到1,Roger, 30歲 

<h2 class="text-2xl">展開運算子</h2>
...變數名 去展開
舉例
const Array1[1,2,3,4,5]
const Array2[5,4,3,2,1]

...變數名 =展開

console.log(...Array2)  將會得到5,4,3,2,1

<h2 class="text-2xl">模板字串</h2>
可以自由 組成想要構成的文字例如
const Array1[1,2,3,4,5]
const Array2[5,4,3,2,1]

const myId  = {
id: 1,
name: 'Roger',
label: '30歲',
}

const { id, name, label } = myId
console.log(`${ name } 號碼是id  今年${label} `)
</pre>
</template>

<script setup>
// 解構賦值
const myId  = {
id: 1,
name: 'Roger',
label: '30歲',
}

const { id, name, label } = myId
console.log('解構賦值:',id,name,label)

// 展開運算子
const Array1 = [1,2,3,4,5]
const Array2 = [5,4,3,2,1]

console.log('展開運算子', ...Array2)


// 模板字串
console.log(`我是:${ name } id號碼是:${id} 今年:${label}`)

</script>

<style scoped>
</style>