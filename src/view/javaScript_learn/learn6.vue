<template>
<h2>Array.join()</h2>
<p>範例:['apple','box','car']</p>
<p>{{ data1Result }}</p>
<p>回傳值</p>

</template>

<script setup >
const data1 = ['apple','box','car',null,undefined]

const data1Result = data1.join()


</script>

<style scoped>
</style>