<template>
    <main><h1>JavaScript Learn</h1></main>
    <h2>Js資料型別</h2>
    <p>先從基本型別開始複習</p>
    <p>JavaScript的資料型別有8種</p>
    <ul>
        <li>第1種 <span>數字型別(Number)</span>1,2,3,4,5,6,7,8,9,10
            常用於計算資料例如1+2,10-5,10*5,10/5
        </li>
        <li>
            第2種 <span>字串型別(String)</span> '1','2','3','4','5','6','7','8','9','10'
            常用於文字資料例如'Hello','Hello World','Hello World!'
        </li>
        <li>
            第3種 <span>布林型別(Boolean)</span> true,false
            常用於判斷資料例如if(1>2) true,`if(1<2) false`
        </li>
        <li>
            第4種 null <span>型別(null)</span>
            常用於資料不存在或為空值例如let x = null
        </li>
        <li>
            第5種 undefined <span>型別(undefined)</span>
            常用於資料不存在或為空值例如let x
        </li>
        <li>
            第6種 空 <span>物件型別(Object)</span> {}
            常用於資料不存在或為空值例如let x = {}
        </li>
        <li>
            第7種 空 <span>陣列型別(Array)</span> []
            常用於資料不存在或為空值例如let x = []
        </li>
        <li>
            第8種 空 <span>函式型別(Function)</span> function(){}
        </li>
    </ul>

    <h2>if/For 方法</h2>

    <ul>
        <li><h3>if方法</h3>
        <p>if方法用於判斷資料是否符合條件</p>
            <p>if(1>2) true,`if(1 < 2) false`</p>
            <p>型別0 會被視為false 型別1 會被視為true</p>
            <p>當然也可以使用else if 來判斷多個條件
                else if(1>2) true,`else if( 1 < 2) false`
            </p>
            <p>也可以使用else 來判斷最後的結果
            else if(1>2) true,`else if( 1 < 2 ) false`
            </p>
        </li>
        <li><h3>for方法</h3>
        <p>for方法 用於重複性的代碼。
            可以用於陣列或物件的遍歷(重複)
        </p>
        <p>for(let i=0 ; i < 10; i++ ) { console.log(i) } 
        </p>
        </li>

    </ul>
    
    </template>
    <script setup lang="ts">
    
    
    </script>
    
    <style scoped>
        span{
            color:red;
            font-size:18%;
        }
    </style>