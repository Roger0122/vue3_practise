<template>
<div class="navbar">

    <div>
      <ul>
        <li><div class="link"><RouterLink to="/">Home</RouterLink></div></li>
      </ul>
    </div>
    <div>
      <ul>
        <li><div class="link"><RouterLink to="/01_props">01_props</RouterLink></div></li>
        <li><div class="link"><RouterLink to="/02_emit">02_emit</RouterLink></div></li>
        <li><div class="link"><RouterLink to="/03_event-bus">03_event-bus</RouterLink></div></li>
        <li><div class="link"><RouterLink to="/04_V_model">04_V_model</RouterLink></div></li>
        <li><div class="link"><RouterLink to="/05_useAttrs">05_useAttrs</RouterLink></div></li>
        <li><div class="link"><RouterLink to="/06_ref">06_ref</RouterLink></div></li>
        <li><div class="link"><RouterLink to="/07_provide_inject">07_provide_inject</RouterLink></div></li>
      </ul>
    </div>

  <div>
    <ul>
      <li><div class="link"><RouterLink to="/jslearn">/jslearn</RouterLink></div></li>
      <li><div class="link"><RouterLink to="/jslearn2">/jslearn2</RouterLink></div></li>
      <li><div class="link"><RouterLink to="/jslearn3">/jslear3</RouterLink></div></li>
    </ul>
  </div>  
  <div>
    <ul>
      <li><div class="link"><RouterLink to="/todolist">todolist</RouterLink></div></li>
    </ul>
  </div>
</div>

</template>

<script lang="ts">
import { RouterLink } from 'vue-router';

</script>

<style scoped>
.navbar {
  display: flex;
  height: auto;
  align-items: center;
  background-color: sandybrown;
  color: #fff;
  padding: 0 20px;
}


</style>