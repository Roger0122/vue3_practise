<script setup>
import { RouterView } from 'vue-router';
import navbar from '@/view/navbar.vue'
</script>

<template>
<nav>
<navbar/>
</nav>
<!-- 內文 -->
<body>
<RouterView v-slot="{ Component }">
  <transition name="fade">
    <div>
    <component :is="Component" />
    </div>
  </transition>
</RouterView>
</body>
</template>

<style scoped>

</style>
