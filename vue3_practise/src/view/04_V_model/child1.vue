<template>
<div class="child1">
<p>兒子1</p>
<p>爸爸的{{ money }}元 {{ info }}</p>

<button @click="givefathermoney">給爸爸2000元</button>

</div>

</template>

<script setup>
let props = defineProps(['money','info'])
let $emit =defineEmits(['click'])


const givefathermoney = () => {
  $emit("click",props.money+2000,'給了');
}


</script>

<style scoped>
.child1{
  width: 200px;
  height: auto;
  background: orange;
}
</style>