<template>
<!-- 1. JavaScript 基礎

----------------------------------------------------------
函式：箭頭函式、this 綁定、閉包（Closure）
箭頭函式
function a(a, b){
  return a + b
}
function b((a, b) => a + b ) 這是錯的
const b = (a, b) => a + b 這才是正確
我認知可以代替() 跟return效果,再不複雜的狀況下可以向 => 組成 去代替return 以及 {}
備註: 由於箭頭函數不可以用function呼叫 必須使用 const 或let 函數命名的方式。


this 綁定的5種姿態
1.this 的值 取決於「呼叫方式」，而不是函式定義在哪裡。


1.物件狀態下的this是自己。
const obj = {
'a':1,
'b':2,
'c': () => console.log('a','b')
}

console.log(obj.c)  // 2?

閉包 又是? 跟function 作用域有關
基本上 變數定義時的作用域有關。
一般變數在外層建立時，會= 全域變數 = windows.變數名

當變數在function建立時,let const 的作用域在function當中
此時透過在外面log時不會有資料 undefined

-------------------------------------------------------
非同步：Promise / async / await / .then .catch
事件循環（Event Loop）/ 微任務 & 巨任務
錯誤處理：try/catch、throw、Error 物件

-------------------------------------------------------
今天全心CSS
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
v-if / v-show 差別 (實體銷毀&不銷毀)
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

  <!-- <p>Input: {{ a }}</p>
  <p>Output:{{ b }}</p>
  <p>計算有幾個0:{{ Conut1  }}</p> -->

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

// const data = {
//   user: { name: "Roger", info: { age: 30, address: { city: "Taipei" } } }
// };
// // 請說明：如果用淺拷貝 vs 深拷貝，修改 city 時會有什麼差別？
// const Copy1 = data  //指派賦值 不適拷貝喔
// const shallowCopy = {...data}
// const deepCopy = JSON.parse(JSON.stringify(data))
// data.user.info.address.city = 'japan'

// console.log('淺',shallowCopy.user.info.address.city)
// console.log('深',deepCopy.user.info.address.city)


// function a(a, b){ return a + b}
// const b =(a, b) => a + b

// console.log ('a',a(1,3))
// console.log('b',b(1,3));


// const obj = {
// 'a':1,
// 'b':2,
// c(){
//   const inner = () => console.log(this.a + this.b)
//   inner()
//   }
// }

// obj.c()

// 1,不改變原陣列長度,2碰到0時就往右邊追加0
// Input: arr = [1,0,2,3,0,4,5,0]
// Output:      [1,0,0,2,3,0,0,4]
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
// 解題想法 思考看看。 
// 已知陣列長度為8 索引值為0 ~ 7 , 所以更新陣列不可以超過8,索引值  0~7 萬一今天給的長度不一樣不就要? 索引最大值length-1
// 
// const a = [1,0,2,3,0,4,5,0]

// duplicateZeros(a)

// function duplicateZeros(arr) {
//   const n = arr.length;
//   let zeroCount = 0;

//   // 1) 數 0 有幾個,計算偏移量
//   for (let v of arr) if (v === 0) zeroCount++;
//   // 2) 從右往左寫回,限制符合長度
//   // j 是「理想終點」索引，可能會超出 n-1，所以寫回前要檢查 j < n
//   for (let i = n - 1, j = n + zeroCount - 1; i >= 0; i--, j--) {
//     if (j < n) arr[j] = arr[i];     // 把原值搬到新位置（若在範圍內）
//     if (arr[i] === 0) {
//       j--;                          // 為「複製的 0」空出一格
//       if (j < n) arr[j] = 0;        // 寫入複製的 0（若在範圍內）
//     }
//   }
// }

</script>


<style scoped>
</style>