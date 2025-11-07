<template>
<h1 class="text-3xl">物件操作：深拷貝 vs 淺拷貝、Object.keys / Object.values / Object.entries</h1>

<pre>
物件操作：深拷貝 vs 淺拷貝
Object.keys / Object.values / Object.entries
基本差別
淺拷貝 表層(記憶體位置相同)

const user = { name: "Roger", info: { age: 30 } };
const copy = { ...user };
copy.info.age = 18;
console.log(user.info.age); // 請問會輸出什麼？
會輸出18 因為淺拷貝拷貝表層  記憶體指向位置相同。

const user = { name: "Roger", info: { age: 30 } };
const deepCopy = JSON.parse(JSON.stringify(user));
deepCopy.info.age = 18;
console.log(user.info.age); // 請問會輸出什麼？
深拷貝獨立物件 會輸出原本的30(不受影響)

const product = { id: 1, name: "Laptop", price: 20000 };
// 請用 Object.keys 取出所有屬性名稱 → ["id", "name", "price"]
取出所有 key
console.log(Object.keys(product))
取出所有 value
console.log(Object.values(product))
轉換成 entries
console.log(Object.entries(product))

應用題
用 Object.entries 把物件轉成 Map(特殊物件題)

const user = { name: "Roger", age: 30 };
// 請轉換成 Map，並取出 age → 30
const newUser = new Map()
newUser.set(Object.key(user),Object.values(user))
newUser.get(age)
</pre>


</template>

<script setup>
</script>

<style scoped>
</style>