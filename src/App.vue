<script setup>
import { RouterLink, RouterView } from 'vue-router';
import navbar from '@/view/navbar.vue'
</script>

<template>
    <nav>
        <navbar/>
    </nav>
<!-- <nav>
    <div class="link"><RouterLink to="/">Home</RouterLink></div>
    <div class="link"><RouterLink to="/01_props">01_props</RouterLink></div>
    <div class="link"><RouterLink to="/02_emit">02_emit</RouterLink></div>
    <div class="link"><RouterLink to="/03_event-bus">03_event-bus</RouterLink></div>
    <div class="link"><RouterLink to="/04_V_model">04_V_model</RouterLink></div>
    <div class="link"><RouterLink to="/05_useAttrs">05_useAttrs</RouterLink></div>
    <div class="link"><RouterLink to="/06_ref">06_ref</RouterLink></div>
    <div class="link"><RouterLink to="/07_provide_inject">07_provide_inject</RouterLink></div>
</nav>
<nav>
    <div class="link"><RouterLink to="/jslearn">/jslearn</RouterLink></div>
    <div class="link"><RouterLink to="/jslearn2">/jslearn2</RouterLink></div>
    <div class="link"><RouterLink to="/jslearn3">/jslear3</RouterLink></div>

</nav>
<nav>
    <div class="link"><RouterLink to="/todolist">todolist</RouterLink></div>
</nav> -->
<main>
<RouterView/>
</main>
</template>

<style scoped>
.link {
    display: inline-block;
    padding: 8px;
    color: #42b983;
    text-decoration: none;
    margin: 0 1px 0 1px;
}
</style>
