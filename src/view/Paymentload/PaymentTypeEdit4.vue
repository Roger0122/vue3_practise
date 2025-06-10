<template>
  <table>
    <tr>
      <th v-for="title in PayTypeSelect" :key="title">{{ title }}</th>    
    </tr>
    <tr v-for="proj in flatProjectList" :key="proj.ProjectNum">
      <td>{{ proj.ProjectNum }}</td>
      <td>{{ proj.ProjectType }}</td>
      <td>{{ proj.ProjectName }}</td>
      <td>{{ proj.ProjectPrice }}</td>
    </tr>
  </table>

  <button @click="addHandlerBtn">增加</button>
</template>

<script setup>
import { ref, computed } from 'vue';

const PayTypeSelect = ref(['編號', '類型', '品名', '價格']);

const ProjectList = ref([
  { 
    hamburger: {
      ProjectNum: 1,
      ProjectType:'食物',
      ProjectName:'漢堡',
      ProjectPrice: 50,
    },
    beer: {
      ProjectNum: 2,
      ProjectType:'飲料',
      ProjectName:'啤酒',
      ProjectPrice: 100,
    },
  }
]);

const flatProjectList = computed(() => {
  return ProjectList.value.flatMap(item => [item.hamburger, item.beer]);
});

const addHandlerBtn = () => {
  ProjectList.value.push({
    hamburger: {
      ProjectNum: 3,
      ProjectType: '食物',
      ProjectName: '薯條',
      ProjectPrice: 40,
    },
    beer: {
      ProjectNum: 4,
      ProjectType: '飲料',
      ProjectName: '可爾必思',
      ProjectPrice: 80,
    },
  });
};
</script>
