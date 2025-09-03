<template>
<h2 class=" text-2xl">Other</h2>


<!-- 1. JavaScript 基礎

變數宣告差異（var / let / const） ----------------------------------------------------------

let var const 差異,基本var 不用(容易汙染變成全域變數,let=變數意旨可以被變更,const=常數=不可被變更)
良好的專案基本上使用let 以及const 就可以 var基本上老舊專案才有可能使用。
真實理解 var =全域變數, let ,const 區域變數,舉例離開
function  name(){
const a = 1
let b = 1
return (a+b) //結果應該是 2吧~}
console.log(function()) //結果是2 

ES6 語法：解構賦值、展開運算子（...）、模板字串　----------------------------------------------------------

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

常見資料型別：Array、Object、Map、Set ---------------------
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


陣列操作方法：map / filter / reduce / forEach / find
物件操作：深拷貝 vs 淺拷貝、Object.keys / Object.values / Object.entries
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

<p>範例Map 進階物件方法</p>
<p>Map 是甚麼 他是ES6追加的新語法 是一個物件,可以透過Map.set 存get去 has 查 size 量 delete 刪</p>


</template>

<script setup>

const hello1 = new Map()

hello1.set('id', 1)
console.log(hello1.get('id')) 





</script>


<style scoped>
</style>