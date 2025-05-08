<template>
  <div class="backdrop" @click.self="emit('close')">
    <div class="modal">
      <slot name="header">預設文字</slot>
      <slot></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<style scoped>
.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  min-width: 300px;
  max-width: 90vw;
}


</style>
