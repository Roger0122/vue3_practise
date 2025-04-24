<template>
<div :title="title">
  <el-button :="$attrs"  @click="handleClick"></el-button>
</div>

</template>

<script setup lang="ts">
// 可用於傳遞參數 以及事件。 優先級比props低 所以有使用props時不會傳遞　title參數。
import { useAttrs } from 'vue'
let $attrs = useAttrs();

// 由於綁定後點級會觸發原先事件，會重複印兩次 這邊接收自定義事件後就不會 傳遞2次。
import { defineEmits } from 'vue'
const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click') 
}

console.log($attrs)

let props = defineProps(['title']);


</script>

<style></style>