<template>
  <div class="border border-gray-300 rounded-md p-4" :class="$attrs.class">
    <slot>
      <h2>卡片標題</h2>
      <p>卡片內容</p>
      <p>卡片資訊</p>
    </slot>
  </div>
</template>

<script setup>
</script>