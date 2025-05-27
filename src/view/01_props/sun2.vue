<template>
  <div class="sun">
    <p>我是子組件2號</p>
    <p>{{ modelValue }}</p>
    <p>{{ title }}</p>
    <p>{{ count }}</p>
    <p>{{ items }}</p>
    <p>{{ level }}</p>
  </div>
</template>


<script setup>
const props = defineProps({
  modelValue:[String, Number],
  title: {
    type: String,
    default: '預設標題',
  },
  count: {
    type: Number,
    required: true,
  },
  items: {
    type: Array,
    default: () => ([]),
  },
  level: {
    type: Object,
    default: () => ({}),
  },
});


</script>

<style scoped>
</style>