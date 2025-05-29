<template>
<!-- 功能列表 -->
<!-- 搜尋功能 -->
<h2>搜尋欄位</h2>
<input type="text" placeholder="請輸入搜尋結果" v-model="seach">
<button @click="SeachResult">搜尋看看</button>
<button @click="SeCrash">清除</button>
<p>搜尋結果</p>
<ul v-if="SeList !==''">
  <li v-for="item in SeList" :key="item.name">
   {{ item.name ??'' }} {{ item.price ??'' }}
  </li>
</ul>


<h1>有甚麼功能</h1>
<button @click="addShow =!addShow">新增商品</button>

<!-- 展示資料 -->
<div>
  <h1>範例資料</h1>
  <ul class="flex">
    <li
    class="px-1" 
    v-for="items in RowList" :key="items.id">
      {{ items.name }} 
    </li>
  </ul>
  <ul>
    <li
    class="px-1" 
    v-for="items in foodList" :key="items.id">
      {{ items.name }}: {{ items.price }}元 
      <span><button class="px-2" @click="EdiModal(items)">修</button></span>
      <span><button @click="delEdit(items.id)">刪</button></span>
    </li>
</ul>
</div>

<!-- 輸入區 -->
<div v-if="addShow">
  <div>
<input type="text" placeholder="輸入水果名稱" v-model="NewList.name">
<input type="number" placeholder="輸入價格"v-model="NewList.price">元
</div >
  <div>
    <button  @click="addEdit">確認新增</button>
  </div>
</div>
<!-- 編輯區 -->
<div v-if="addEditShow">
  <div>
<input type="text" placeholder="輸入水果名稱" v-model="foodEditList.name">
<input type="number" placeholder="輸入價格" v-model="foodEditList.price">元
</div >
  <div>
    <button  @click="EditHandler">確認修改</button>
  </div>
</div>

</template>

<script setup>
import { ref } from 'vue'

const addShow = ref(false);
const addEditShow =ref(false);

const foodList = ref([
  {
    id:1,
    name:'蘋果',
    price:300,
  },
  {
    id:2,
    name: '香蕉',
    price:150,
  },
])

const foodEditList =ref(
   {
    id:'',
    name: '',
    price:null,
  },
)

const seach = ref('');

const SeList = ref([
  {
    name:'',
    price:null,
  }
])

const SeachResult = () =>{
  if(seach.value !==''){
  SeList.value = foodList.value.filter(i =>i.name.includes(seach.value))
  } else {
    SeList.value = []
  }
}


const SeCrash = () => {
  SeList.value = [{ name: '', price: null }]
}


const RowList = ref([{
  id:1,
  name:'名稱',
  },
{
  id:2,
  name:'價格',
},])

const NewList = ref({
  id:'',
  name:'',
  price:null,
})




const addEdit = ()=>{
  const key = foodList.value.length
  ? Math.max( ...foodList.value.map(p =>p.id))+1
  : 1


  if(NewList.value.name == '' || NewList.value.price == ''){
    alert('至少輸入一個名稱&價格')
  }else{  

    foodList.value.push(
      {id:key,
      name:NewList.value.name,
      price:NewList.value.price,
      })
    NewList.value=
    { id:'',name:'',price:null,}
    addShow.value=false
  }
}

const delEdit = (id) => {
  foodList.value = foodList.value.filter((items) =>items.id !== id);
}

const EdiModal = (item) => {
    addEditShow.value = !addEditShow.value

    foodEditList.value=
    {
      id:item.id,
      name:item.name,
      price:item.price,  
    }
}

const EditHandler = () =>{
  const index = foodList.value.findIndex(i => i.id === foodEditList.value.id)
  if (index !== -1) {
    foodList.value[index] = {...foodEditList.value}

  }
    foodEditList.value=
    {
      id:'',
      name:'',
      price:null,  
    }
  addEditShow.value = !addEditShow.value 
}



</script>

<style></style>