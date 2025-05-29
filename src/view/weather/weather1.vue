<template>
<!-- 資料按鈕 -->
<div><button @click="giveMeData">給我資料</button></div>

<!-- 資料展示 -->
<ul>
  <li v-for="item in BackData">
  {{ item.locationName }} {{ item.description }}
  </li>
</ul>

</template>

<script setup>
import axios  from 'axios';
import { ref } from 'vue';

const formData = ref([{}])

const BackData = ref([])


const giveMeData =async () => {
  await axios.get('http://localhost:3000/api/weather')
  .then(res =>{
    formData.value =res.data.records.location

    BackData.value = formData.value.map(location => {
      const locationName = location.locationName
      
      const wxElement = location.weatherElement.find(el => el.elementName === 'Wx')
      const description = wxElement?.time?.[0]?.parameter?.parameterName ?? '無資料'

       return {
        locationName,
        description
       }
    })
  })
  .catch(err => {
    console.log(err)
  })
 
}

</script>

<style scoped>
</style>