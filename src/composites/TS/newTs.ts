// 第一章  TypeScript 基礎學習 Day1
個人背景:政府開課前端班(6個月) Junior 前端工程師。


入職半年後，覺得有許多不足跟可以，再學習的東西，這邊紀錄從零開始學習TypeScript。


TypeScript 是什麼?


個人背景,政府開課前端班,Junior 前端工程師。
實務經驗約半年(職場: 維護系統後台　+　POS前端頁面邏輯)

天天在踩雷，紀錄

為何要學習?
紀錄變強過程


1. 型別指定
2. 型別註記
3. 型別推論
4. 大原則
5. 小練習


// 型別指定Number
let count: Number = 1
count = 2

// 型別註記
let age: number = null
let UseName: String = ''
let isAdult: Boolean = false

// 經常使用型別 
// number 數字（整數、小數都算）
// string 字串
// boolean 布林值 true/false
// null,undefined
// any 未知任意型別

// 型別推論（讓 TS 自己猜）
let price = 30
let product = '咖哩飯'
let HOt = true

// 大原則: 
// 原則（很重要）：
// 能讓 TS 自己推論，就讓它推。
// 需要讓程式「更清楚」或「幫 IDE 提示」時，再自己加型別註記。

//  函式 回傳值/ 漏回傳時

function add(a: number, b: number) {
  return a + b;
}

let result = add(1, 2);   // result 被推論為 number
result.toFixed(2);        // ✅ OK

// 如果哪天你不小心少寫 return：
function add2(a: number, b: number) {
  console.log(a + b);
  // 沒 return -> 回傳型別變成 void / undefined
}

let r2 = add2(1, 2);
r2.toFixed(2); //  這裡 TS 就會跟你說 r2 不是 number


// 小練習1 指派 userName 為字串, userAge 為數字 , isVip 為 布林值false , 並重新指派為true 
let userName: String = 'Roger'
let userAge: Number = 30
let isVip: boolean = false
isVip = true


// 小練習2 禁止亂指派型別, 定義3個變數後, 嘗試指派不同型別。
let a1: number = 1
let b1: String = '2'
let c1: boolean = true

a1 = '1'
b2 = 2
c1 = 1

// 小練習3 刻意不寫型別

let a2 = 1
let b2 = '2'
let c2 = true

a2 = '1'
b2 = 2
c2 = 'yes'


// 第二章 基礎型別的延伸 Day2

一、 函式型別（Function Types）

DAY1 提到基本型別之外，還有函式型別以及物件型別。

function add(a: number, b: number): number {
  return a + b;
}

a: number → 參數型別(數值)
b: number → 參數型別(數值)
): number → 回傳值型別(數值)

如果你不寫回傳型別，TS 會自動推論(Day1提到的型別推論)，建議寫上


可選參數 ?:

function greet(name: string, message?: string) {
  console.log(message ? `${message}, ${name}` : `Hello, ${name}`);
}

message參數型別會被 TS 推成：string | undefined

函式型別作為變數時
let calc: (x: number, y: number) => number;

calc = (a, b) => a + b; // OK
calc = (a) => a;        // 參數數量不符
calc = () => 123;       // 參數數量不符



二、 物件型別（Object Types）

1. 基本物件型別

const user: { name: string; age: number } = {
  name:"yourName",
  age:30,
}

2.可選屬性

const user: {name: string; age?: number} = {
  name:"yourName",
}

3. readonly 可讀不可修改

const product1: { readonly id: string; name: string } = {
  id: "001",
  name: "Burger",
}

product1.id = "002" // id是唯獨屬性不可以再進行修改

const user2: { name: string } = {
  name: "Roger",
  age: 30, // 只允許已知屬性
};


function calculatePrice( price: number, qty: number ): number {
  return price*qty
}

// 

