<template>
<button
:class="['base-button', type, customClass]"
@click="handleClick"
>
<slot />

</button>

</template>

<script setup lang="ts">
const props = defineProps<{
  type?: 'primary' | 'secondary' | 'danger' | 'cancel'
  customClass?: string
}>()

const emit = defineEmits<{
  (e: 'onClick', event: MouseEvent): void
}>()

const handleClick = (e: MouseEvent) => {
  emit('onClick', e)
}
</script>

<style scoped>
.base-button {
  padding: 0.5em 1em;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

/* 類型樣式 */
.primary {
  background-color: #007bff;
  color: white;
}

.primary:hover {
  background-color: #007bff9f;
  color: white;
}

.secondary {
  background-color: #6c757d;
  color: white;
}

.secondary:hover {
  background-color: #6c757d80;
  color: white;
}


.danger {
  background-color: #dc3545;
  color: white;
}

.danger:hover {
  background-color: #dc354673;
  color: white;
}


.cancel {
  background-color: gray;
  color: white;
}

.cancel:hover {
  background-color: gainsboro;
  color: white;
}

</style>