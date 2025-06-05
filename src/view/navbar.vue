<template>
<div class="navbar">

    <div>
      <ul>
        <li><div class="link"><RouterLink to="/"><img src="@/assets/img/home.png" alt="HOME"></RouterLink></div></li>
      </ul>
    </div>
    <div>
      <ul>
        <li><div class="link"><RouterLink to="/01_props">01_props</RouterLink></div></li>
        <li><div class="link"><RouterLink to="/newfather">newfather</RouterLink></div></li>
        <li><div class="link"><RouterLink to="/02_emit">02_emit</RouterLink></div></li>
        <li><div class="link"><RouterLink to="/03_event-bus">03_event-bus</RouterLink></div></li>
        <li><div class="link"><RouterLink to="/04_V_model">04_V_model</RouterLink></div></li>
        <li><div class="link"><RouterLink to="/05_useAttrs">05_useAttrs</RouterLink></div></li>
        <li><div class="link"><RouterLink to="/06_ref">06_ref</RouterLink></div></li>
        <li><div class="link"><RouterLink to="/07_provide_inject">07_provide_inject</RouterLink></div></li>
        <li><div class="link"><RouterLink to="/08_slottest">08_slot_test</RouterLink></div></li>
        <li><div class="link"><RouterLink to="/08_slottest/slot01">08-2_slot01</RouterLink></div></li>
        <li><div class="link"><RouterLink to="/09_v_bind">09_vbind</RouterLink></div></li>
      </ul>
    </div>

  <div>
    <ul>
      <li><div class="link"><RouterLink to="/jslearn">/jslearn</RouterLink></div></li>
      <li><div class="link"><RouterLink to="/jslearn2">/jslearn2</RouterLink></div></li>
      <li><div class="link"><RouterLink to="/jslearn3">/jslear3</RouterLink></div></li>
      <li><div class="link"><RouterLink to="/jslearn4">/jslear4</RouterLink></div></li>
      <li><div class="link"><RouterLink to="/jslearn5">/jslear5</RouterLink></div></li>
      <li><div class="link"><RouterLink to="/learn6">/jslear6</RouterLink></div></li>
      <li><div class="link"><RouterLink to="/modal">/modal</RouterLink></div></li>
    </ul>
  </div>  
  <div>
    <ul>
      <li><div class="link"><RouterLink to="/todolist">todolist</RouterLink></div></li>
      <li><div class="link"><RouterLink to="/bmi">bmi</RouterLink></div></li>
      <li><div class="link"><RouterLink to="/shopcar">shopcar</RouterLink></div></li>
      <li><div class="link"><RouterLink to="/pdf">pdf</RouterLink></div></li>
      <li><div class="link"><RouterLink to="/excel">excel</RouterLink></div></li>
    </ul>
  </div>
  <div>
    <ul>
      <li><div class="link"><RouterLink to="/PaymentTypeEdit">PaymentTypeEdit</RouterLink></div></li>
      <li><div class="link"><RouterLink to="/PaymentTypeEdit2">PaymentTypeEdit2</RouterLink></div></li>
      <li><div class="link"><RouterLink to="/PaymentTypeEdit3">PaymentTypeEdit3</RouterLink></div></li>
      <li><div class="link"><RouterLink to="/ProductType">ProductType</RouterLink></div></li>      
    </ul>
  </div>
  <div>
    <ul>
      <li><div class="link"><RouterLink to="/weather1">weather1</RouterLink></div></li>
      <li><div class="link"><RouterLink to="/addition">addition</RouterLink></div></li>
    </ul>
  </div>
    <div>
    <ul>
      <li><div class="link"><RouterLink to="/pos">POS</RouterLink></div></li> 
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

li{
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.link img {
  width: 50px;  /* 或你要的大小 */
  height: 50px; /* 或 auto 保持比例 */
}

.link {
  display: inline-block;
  margin-right: 10px;
  font-size: 16px;
  text-align: center;;
  transition: color 0.3s ease;
}

</style>