<template>
   <label v-for="opt in options" :key="opt">
    <input type="radio" :value="opt" v-model="optionDefaultName" />{{ opt }}
  </label>
<slot01>
  <!-- <template #[optionDefaultName]> 
    <h2>標題!!!!</h2>
  </template> -->

  <template v-if="optionDefaultName === 'header'" #header>
    <h2>這是 header slot</h2>
  </template>
  
  <template v-if="optionDefaultName === 'main'" #main>
    <h2>這是 main slot</h2>
  </template>

  <template v-if="optionDefaultName === 'footer'" #footer>
    <h2>這是 Footer slot</h2>
  </template>
  
</slot01>

  <baseCard>
    <h3 class="text-lg font-bold">我是外部內容</h3>
  <p>我覆蓋了預設 slot</p>
  </baseCard>

  <!-- 使用範例 -->
  <ModalDialog>
  <template #header>
    <h3 class="text-xl text-red-500">警告</h3>
  </template>

  <template #body>
    <p class="text-gray-700">確定要刪除這個項目嗎？</p>
  </template>

  <template #footer>
    <button class="btn-cancel">取消</button>
    <button class="btn-confirm">確定</button>
  </template>
  </ModalDialog>

  <lingthBox>
    <!-- 具名插朝- 子提供模板,父親寫顯示資料 -->
  <template  #he>
    <h2>頭換成這個</h2>
  </template>
    <template #dy>
    <h2>身體換成這個</h2>
  </template>
  <!-- 開洞內容>都會直接被替換成這個 -->

  <template #ft="slotProps">
  <div>{{slotProps.on}}</div>
  <div> {{slotProps.off}}</div>
  </template>
  </lingthBox>

</template>

<script setup >
import slot01 from '@/view/08_slot/slot01.vue';
import baseCard from '@/view/08_slot/baseCard.vue';
import lingthBox from '@/view/08_slot/lingthBox.vue'
import ModalDialog from '../../components/vue/ModalDialog.vue'
import { ref } from 'vue';

const msg = ref('Parent! Ref')

const options = ref(['header','main','footer'])
const optionDefaultName = ref('header')

</script>


<style scoped>
</style>