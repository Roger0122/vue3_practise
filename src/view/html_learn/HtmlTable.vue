<template>
  <p>table 關於td(rows):垂直 tr(column):水平</p>
  <table>
  <tr>
    <td>a</td>
    <td>b</td>
    <td>c</td>
  </tr>
  <tr>
    <td rowspan=0>1</td>
    <td>2</td>
    <td>3</td>
  </tr>
  <tr>
    <td>z</td>
    <td>x</td>
    <td>y</td>
  </tr>
  <tr>
    <td>300</td>
    <td>100</td>
    <td>200</td>
  </tr>
</table>

</template>

<script setup>
import FancyButton from '@/composites/layout/ui/FancyButton.vue'

</script>


<style scoped>
</style>