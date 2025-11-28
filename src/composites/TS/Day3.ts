// Day3 主題：陣列型別（Array Types）

// 一、陣列型別的兩種寫法
let number: number[]  = [1, 2, 3]

let number2: Array<number> = [1, 2, 3];
// 兩種寫法效果均相同,挑一個喜歡的即可。

number.push(4) // OK [1, 2, 3, 4]
number.map((value) => value*2) // OK  [2, 4, 6, 8]

number.push('5') //  飄紅 不可指派非number類別

// 如果是多個陣列?

let number3: number[][] =[[1,2,3],[4,5,6]];

number3.push([7,8,9]) // 合法

// 除了數值外也有其他 類別時

let number4: any[] = ['hello', 123, true]

// 元素的數量固定,每個元素類別不一樣時。
let number5: [string, number] = ['string', 30]

// 二、物件陣列

// 新增一筆商品資料
type Product = {
  id: string;
  name: string;
  price: number;
  Customized?: Boolean // 可選的
};

const products: Product[] = [
  {id:'001', name: '麥香雞', price:59 },
  {id:'002', name: '大麥克', price:89 },
  {id:'002', name: '麥脆雞', price:79, Customized: false}, // 可選參數
]

前幾天有提到  型別推論


const prices = [40, 60 , 80];
const total = prices.reduce((sum, p) => sum + p, 0)
// sum: number, p: number reduce 函式 可參考MDN說明

const burger = products.find(p => p.id === 'B02');
// burger: Product / undefined
// 回傳值 回傳第一個通過測試函式的陣列元素。否則回傳 undefined。 MDN說明


小練習1

宣告陣列型別 numbers (number[]) ，並計算出總和 Total

// TODO: 宣告 numbers ,  放入任意數字
// TODO: 宣告 Total , 使用 reduce 計算合計結果


const isArray: number[] = [1,2,3,4,5,6,7,8,9,10]
const Total: number = isArray.reduce((accumulator, currentValue) => accumulator + currentValue ,0)

小練習2

宣告一個 User 陣列（物件陣列）

type User = {
  name: string;
  age: number;
}

const users: User[] = [
  { name: 'Roger', age: 30},
  { name: 'Any', age: 19},
  { name: 'Bom', age: 15},
]

const adults: User[] = users.filter((user) => user.age > 18);

小練習3 

// 找 name === "Roger" 的使用者，找到就 console.log，找不到則顯示 “No user found”

function findName(users: User[]){
  const target = users.find((user) => user.name === 'Roger');

  if (target) {
    console.log(target); 
  } else {
    console.log('No user found');
  }
  
}

findName(users)