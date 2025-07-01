<template>
<input type="text" placeholder="請輸入商品名" v-model="PName">
<input type="number" placeholder="請輸入商品價格" v-model="PPrice">
<div class="px-2 py-4">
  <button class=" bg-gray-400 text-2xl"
  @click="addProductBtnHandler" 
  >新增
  </button>
</div>

<table >
  <tr >
    <th v-for=" title in tableTitle" :key="title.titleNo">{{ title }}</th>
  </tr>
  <tr v-for=" product in Product" :key="product.ProductNo" >
    <td>{{ product.ProductNo }}</td>
  <td>
    {{ product.ProductName }}
  </td>
  <td>
    {{ product.ProductPrice }}
  </td>
  <td class="bg-gray-400">
    <button class="px-2"
    @click="delProductBtnHandler(product.ProductNo)"
    >刪除</button>
  </td>
</tr>
  
</table>


</template>

<script setup>
import { ref } from 'vue'

const PName = ref('');
const PPrice = ref('');


const tableTitle = ref(
  {
    titleNo:'標題號碼',
    titleName:'名稱',
    titlePrice:'價格',
  }
)

const Product = ref([
{
  ProductNo:1,
  ProductName:'蘋果',
  ProductPrice:30,  
},
{
  ProductNo:2,
  ProductName:'葡萄',
  ProductPrice:50,  
}
]);

const addProductBtnHandler = (() =>{
  const unlitNumber = Product.value.length?
  Math.max(...Product.value.map(p => p.ProductNo)) + 1
  : 1;
  const NewProductName = PName.value;
  const NewProductPrice = PPrice.value;


  if( PName.value !== '' && PPrice.value !== ''){
  Product.value.push(
    {
    ProductNo:unlitNumber,
    ProductName: NewProductName,
    ProductPrice: NewProductPrice,  
    }
  )

  PName.value = ''
  PPrice.value = null
}
else{
  alert('至少輸入一個項目','請輸入商品名&價格')
}
}

);


const delProductBtnHandler = (ProductNo) => {
  Product.value = Product.value.filter(item => item.ProductNo !== ProductNo)
}

</script>