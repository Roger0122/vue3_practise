<template>
<div class="relative w-[500px] h-auto">
  <div class=" fixed top-0 right-0  bg-slate-600 ">
  <h1>測試彈窗</h1>
  <button @click="closeThisBind">關閉彈窗</button>
  <p>{{  colorText }}</p>

  <div>
    <label
      v-for="name in ['Jack', 'John', 'Jane', 'Roger']"
      :key="name"
      class="flex items-center gap-2 cursor-pointer"
    >
      <input type="checkbox" v-model="nambers" :value="name" />
      {{ name }}
    </label>
  </div>
  </div>
</div>

</template>

<script setup>
import { ref, onMounted} from 'vue'


const nambers = ref([])

function getData(){
  nambers.value = Array.isArray(props.checkNames)
    ? [...props.checkNames]
    : []
}

const props = defineProps({
  colorText:{
    type: String,
  },  
  checkNames:{
    default:[],
  },

  
})

const emit = defineEmits(['close','chance'])

function closeThisBind() {
  emit('close','藍色','金色')
  emit('chance', nambers.value)
}

onMounted(()=>{
getData()
})

</script>

<style scoped>

</style>