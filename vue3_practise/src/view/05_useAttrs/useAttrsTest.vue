<template>
  <div class="useAttrs">
    <h1>useAttrs 練習</h1>
    <el-button type="primary" :icon="Edit"></el-button>
    <EditButton type="primary" size="small" :icon="Edit" title="編輯" @click="handler"></EditButton>
  </div>

</template>

<script setup lang="ts">
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
import EditButton from './EditButton.vue'

const handler =()=> {
  console.log(1)
  console.log(2 )
}

</script>



<style scoped>
.useAttrs{
  width: 400px;
  height: auto;
  background-color: blueviolet;
}
</style>