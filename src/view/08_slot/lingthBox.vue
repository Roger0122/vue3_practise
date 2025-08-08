<template>
<div class=" bg-red-300"><slot name="he">頭</slot></div>
<div><slot name="dy">身體</slot></div>
<div class=" bg-slate-600"><slot>腳</slot></div>
<div class=" bg-slate-300"><slot>腦</slot></div>

<div><slot name="ft" :off=helloWorld :on="1"></slot></div>

</template>

<script setup>
import { ref} from 'vue'

const helloWorld = ref('hello')

</script>

<style scoped>
</style>