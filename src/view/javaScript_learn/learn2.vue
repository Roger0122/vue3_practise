<template>
    <main><h1>JavaScript Learn</h1></main>
    <h2>Js資料型別</h2>
    <p>關於函式、陣列方法（map/filter）</p>
    <p>函式型別 ：function 可以讓你 執行某項任務，並回傳一個新的值</p>
    <p>例如: function add(a, b) { return a + b; }</p>
    <p>就可以在呼叫add(1,2) 時會傳結果 1+2 = 3</p>
    <p>舉例:{{ Numberone}} +{{ Numbertwo}}
        <Mybutton type="primary" @onClick="sum = Numberone + Numbertwo">等於</Mybutton>
    {{ sum }}</p>

    </template>
    <script setup lang="ts">
    import { ref } from 'vue';
    import Mybutton from '@/view/ui/button.vue'
    const sum  =ref();
    const Numberone =ref(1);
    const Numbertwo =ref(2);
    
   
    </script>
    
    <style scoped>
        span{
            color:red;
            font-size:18%;
        }
    </style>