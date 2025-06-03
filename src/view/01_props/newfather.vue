<template>
  <div>父組件</div>

  <daughter 
  :food=food
  >
  </daughter>

</template>




<script setup>
import daughter from '@/view/01_props/daughter.vue'
import { ref } from 'vue'

const food = ref(['蘋果','香蕉'])

</script>

