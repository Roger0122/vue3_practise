<template>
  <div class="modal">
    <slot name="header">1</slot>
    <slot name="main">2</slot>
    <slot name="footer">3</slot>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.modal {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 10px;
  background-color: #f9f9f9;
}
</style>
