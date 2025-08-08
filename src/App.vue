<script setup>
import { RouterView } from 'vue-router';
import navbar from '@/view/navbar.vue'

</script>

<template>
<nav>
<navbar/>
</nav>

<body>
<RouterView v-slot="{ Component }">
  <transition name="fade">
    <component :is="Component" />
  </transition>
</RouterView>

</body>

</template>

<style scoped>


</style>
