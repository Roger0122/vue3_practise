<template>
  <button @click="HtmlShowHandler">Table~</button>
  <FancyButton>
    點我
  </FancyButton>
<template v-if=htmlShow>
<HtmlTable />
</template>



</template>

<script setup>
import { ref } from 'vue'
import HtmlTable from '@/view/html_learn/HtmlTable.vue'
import FancyButton from '@/composites/layout/ui/FancyButton.vue'

const htmlShow = ref(false)


function HtmlShowHandler(){
  htmlShow.value = !htmlShow.value
} 


</script>


<style scoped>
</style>