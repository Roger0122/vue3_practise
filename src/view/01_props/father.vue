<template>
  <div class="father">
    <h1 >我是父親組件</h1>
    <p>{{ MoneyIsGood }}</p>
    <input type="text" v-model="MoneyIsGood">
    <hr>
    <sun message="你好啊兒子" :BigMoney="BigMoney" ></sun>
    <hr>
    <sun2 
      title="標題"
      :count= 10
      :items="['蘋果','香蕉','橘子']"
      :level="{level:1,color:'red',}"
        v-model="MoneyIsGood"
    >
    </sun2>
  </div>
  
  <p>button-disabled</p>
  <button :disabled="isButtonDisabled">Button渲染</button>
  <p v-bind="objectOfAttrs">objectOfAttrs</p>


  <h2>JavaScript 表達式均可以使用</h2>
  <!-- <p>{{ Number1 + 1 }}</p>
  <p>{{ OK ? 'yes' : 'no' }} </p>
  <p>{{ message.split('').reverse().join('') }}</p>
  <div :id="`list-${id}`"></div> -->

  <h2>無效部分</h2>

  <!-- 這是一個語句，而非表達式 -->
  <!-- {{ var a = 1 }} -->

<!-- 條件控制也不支持，請使用三元表達式 ? '' :''-->
  <!-- {{ if (ok) { return message } }} -->
  
</template>

<script setup>
  import { ref } from "vue";
  import sun from "./sun.vue";
  import sun2 from "./sun2.vue"
  let BigMoney = ref(10000)
  let MoneyIsGood = ref(0)
  const isButtonDisabled = ref(false)


  const objectOfAttrs = {
  id: 'container',
  class: 'wrapper'
}

</script>

<style scoped>
.father{
  width: 400px;
  height: 600px;
  background-color: gray;
  
}
#container {
  color: red;
}

.wrapper{
  background: brown;
}
</style>