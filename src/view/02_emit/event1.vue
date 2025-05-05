<template>
<div class="sonEvent">
<h3>兒子組件</h3>
<Mybutton type="primary">子組按件</Mybutton>

<input type="text">

</div>

</template>

<script setup>
import Mybutton from '@/view/ui/button.vue'


</script>

<style scoped>
.sonEvent{
  width: 400px;
  height: 200px;
  background-color: blueviolet;
}
</style>