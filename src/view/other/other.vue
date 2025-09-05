<template>
<!-- 1. JavaScript 基礎
----------------------------------------------------------
變數宣告差異（var / let / const） 

let var const 差異,基本var 不用(容易汙染變成全域變數,let=變數意旨可以被變更,const=常數=不可被變更)
良好的專案基本上使用let 以及const 就可以 var基本上老舊專案才有可能使用。
真實理解 var =全域變數, let ,const 區域變數,舉例離開
function  name(){
const a = 1
let b = 1
return (a+b) //結果應該是 2吧~}
console.log(function()) //結果是2 

----------------------------------------------------------
ES6 語法：解構賦值、展開運算子（...）、模板字串　

解構賦值比較像是 從變數拿東西出來使用 舉例
const myId  = {
id: 1,
name: 'Roger',
label: '30歲',
}

const { id, name } = myId

console.log(id,name, label) 得到1,Roger, 30歲 
展開運算子比較簡單...變數名 去展開
舉例
const Array1[1,2,3,4,5]
const Array2[5,4,3,2,1]

...變數名 =展開

console.log(...Array2) // 會得到5,4,3,2,1吧

模板字串可以自由 組成想要構成的文字例如
const Array1[1,2,3,4,5]
const Array2[5,4,3,2,1]

const myId  = {
id: 1,
name: 'Roger',
label: '30歲',
}

const { id, name, label } = myId

console.log(`${ name } 號碼是id  今年${label} `)

----------------------------------------------------------
常見資料型別：Array、Object、Map、Set 
Array[] 
Object {}


1. Map
用途：像 Object 一樣用來存「鍵值對（key-value）」
差別：
Object 的 key 只能是字串或 Symbol
Map 的 key 可以是 任意型別（物件、函式、數字都可以）
常見方法：
map.set(key, value) → 新增或更新
map.get(key) → 取值
map.has(key) → 檢查有沒有 key
map.delete(key) → 刪除
map.size → 元素數量

const hello1 = new map()
hello1.set(id, '1')

2.Set
用途: 像Array。 
可以自動刪除重複值
方法一樣可以使用

Set.add()
常見方法：
set.add(value) → 新增值
set.has(value) → 檢查有沒有
set.delete(value) → 刪除
set.size → 內容數量

----------------------------------------------------------

陣列操作方法：map / filter / reduce / forEach / find
map Q會改變原陣列嗎~?   A:會的map會建立一個新的陣列。

範例const Array1 =[1,2,3,4,5]
const Array2 = Array1.map((x) => x * 2)

The current element being processed in the array.
creates new Array 

A new array with each element being the result of the callback function.
簡單來說 陣列每一個元素都會依照callback function 回調結果，放入新的一個陣列。

filter 淺拷貝 從 function 回調 符合 function 結果的元素。
範例:const Array3 =['live','food','money']
const result = Array3.filter((x) => x ==='live' )
未通過會傳回一個空陣列。 備註由於回調是function 也可以直接呼叫function去對每一個元素進行驗證。

reduce(累加值  , 初始值(位置, 初始的值))
回調結果:單一的值
const Array1 =[1,2,3,4,5]
const Array2 = Array1.map((x) => x * x)

拆解，比較像是制定初始的值


forEach 跟map差異是map會在其中每個值後  會傳一個新的陣列。
forEach 的遍歷會傳的是單一的值(也就是跟For迴圈輸出結果有點像)


find 找到第一個符合回傳，如果都沒有符合的回傳 undefined
const Array1 = [3,10,20,30,90]
const Array2 = array1.find((e) => e%3 = 1 ) // 預期10
const Array3 = array2.find((e) => e >100 ) //預期undefined


----------------------------------------------------------
物件操作：深拷貝 vs 淺拷貝、Object.keys / Object.values / Object.entries

淺拷貝身拷貝基本差別 淺拷貝表層(記憶體位置相同)

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

js 下週再來看看吧~ 腦休息
函式：箭頭函式、this 綁定、閉包（Closure）



非同步：Promise / async / await / .then .catch
事件循環（Event Loop）/ 微任務 & 巨任務
錯誤處理：try/catch、throw、Error 物件



2. CSS / Tailwind 基礎

Flexbox（橫向/縱向置中、space-between）
Grid（2D 版面設計）
RWD：用 @media 或 Tailwind 的 sm: md: lg:
常見樣式：按鈕 hover、disabled 狀態
Tailwind：能不看文件寫出常見排版（px, py, flex, grid, text, bg, rounded, shadow）

3. Vue 3 基礎

Vue 生命週期（onMounted, onUpdated, onUnmounted）
ref vs reactive 的差別
Props 傳值、Emit 傳事件
v-model 雙向綁定（含多層組件的傳遞）
Computed vs Watch（何時用哪個？）
Router：動態路由參數、路由守衛
Pinia：state / getters / actions
元件設計：父子組件拆分、slot 使用
v-if / v-show 差別
v-for + key 的正確使用

4. 實務必備能力

API 串接（axios/fetch），能處理 loading / error 狀態
CRUD（新增、讀取、修改、刪除）的完整流程
表格功能（分頁、排序、搜尋、Excel 匯出）
表單驗證（必填、格式錯誤、錯誤提示 UI）
使用 localStorage / sessionStorage 存取資料
部署（Vite → GitHub Pages / Vercel）

5. 加分技能

i18n 多語系
TypeScript 基礎（型別、介面、泛型）
Jest / Vitest：能寫簡單單元測試
Git：能處理 branch / merge / rebase / conflict
DevTools：效能分析、網路請求檢查 -->

    <!-- 無聊來個小練習吧 BMI -->
    <!-- <div><input type="number" placeholder="請輸入身高 cm" v-model="height">公分</div>
    <div><input type="number" placeholder="請輸入體重 kg" v-model="weight">公斤</div>
    <button @click="sumbitHandler" class="bg-gray-300">計算你的BMI</button>
    <p>你的BMI為: {{ bmi }}</p>
    <p>建議: {{ support }}</p>
  </div> -->

</template>

<script setup>
// import { ref } from 'vue'

// const height = ref(0)
// const weight = ref(0)
// const bmi = ref(0)
// const support = ref('')

// function sumbitHandler () {
//   if (height.value <= 0 || weight.value <= 0) {
//     support.value = ''
//     alert('請輸入身高體重')
//     return
//   }

//   const h = height.value / 100
//   const w = weight.value
//   const raw = w / (h * h)

//   bmi.value = Math.round(raw * 10) / 10  

//   if (bmi.value < 18.5) {
//     support.value = '「體重過輕」，需要多運動，均衡飲食，以增加體能，維持健康！'
//   } else if (bmi.value >= 18.5 && bmi.value < 24) {
//     support.value = '恭喜！「健康體重」，要繼續保持！'
//   } else if (bmi.value >= 24 && bmi.value < 27) {
//     support.value = '「體重過重」了，要小心囉，趕快力行「健康體重管理」'
//   } else {
//     support.value = '啊～「肥胖」，需要立刻力行「健康體重管理」囉！'
//   }
// }

// const user = { name: "Roger", age: 30 };
// // 請轉換成 Map，並取出 age → 30
// const newUser = new Map(Object.entries(user))
// console.log(newUser)
// console.log(newUser.get('age'))


// const order = { orderId: 123, amount: 500, status: "paid" };
// 請計算這個物件有幾個屬性（提示：Object.keys）

// const obj = { a: 1, b: 2, c: 3 };
// // 請轉換成 {1: "a", 2: "b", 3: "c"} 希望結果是靜態物件不是鍵值的物件， 所以要用Object.fromEntries（）
// const reversed = Object.fromEntries(
//   Object.entries(obj).map(([key, value]) => [value, key])
// );

// console.log(reversed); 
// // { 1: "a", 2: "b", 3: "c" }


// const user = { name: "Roger", age: 30, password: "123456" };
// // 請建立一個新物件，移除 password
// const NewMap = Object.fromEntries(
// (Object.entries(user).filter(([key ]) => key !=='password'))
// )

// console.log(NewMap)

const data = {
  user: { name: "Roger", info: { age: 30, address: { city: "Taipei" } } }
};
// 請說明：如果用淺拷貝 vs 深拷貝，修改 city 時會有什麼差別？
const Copy1 = data  //指派賦值 不適拷貝喔
const shallowCopy = {...data}
const deepCopy = JSON.parse(JSON.stringify(data))
data.user.info.address.city = 'japan'

console.log('淺',shallowCopy.user.info.address.city)
console.log('深',deepCopy.user.info.address.city)

</script>


<style scoped>
</style>