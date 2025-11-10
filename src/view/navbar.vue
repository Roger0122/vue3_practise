<template>
  <nav class="navbar">
    <RouterLink class="link" to="/" @click="closeAll">
      <img src="@/assets/img/home.png" alt="HOME" />
    </RouterLink>

    <NavSection
      v-for="g in NAV_GROUPS"
      :key="g.id"
      :group="g"
      :isOpen="!!openMap[g.id]"
      @toggle="toggleSection"
    />
  </nav>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import NavSection from '@/components/menu/NavSection.vue';
import { NAV_GROUPS } from '@/composites/menu/menu';

const route = useRoute();

// 多開：用 Record<string, boolean>
const openMap = reactive<Record<string, boolean>>({});

// 切換展開/收合
function toggleSection(id: string) {
  // 型別處理!!可以在!! 會把任何值「強制轉成嚴格的 boolean」。
  const wasOpen = !!openMap[id];

  // 若你想改「手風琴（單開）」：
  for (const k of Object.keys(openMap)) openMap[k] = false;
  
  if(!wasOpen){
  openMap[id] = true;
  }
}

function closeAll() {
  for (const k of Object.keys(openMap)) openMap[k] = false
}

// 自動根據目前路由，把對應群組打開（很實用）
onMounted(() => {
  const current = route.path;
  for (const g of NAV_GROUPS) {
    if (g.items.some(i => i.to === current || current.startsWith(i.to + '/'))) {
      openMap[g.id] = true;
    }
  }
});

watch(
  () => route.path,
  (p) => {
    if (p === '/') closeAll()
  },
  { immediate: true }
)
</script>

<style scoped>
.navbar {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  background-color: sandybrown;
  color: #fff;
  padding: 8px 20px;
}

.link img { 
  width: 50px;
  position: absolute; 
  top:0;
  right: 0;
  /* 或你要的大小 */
  height: 50px;
  /* 或 auto 保持比例 */
  } 

/* .link { display: inline-block; margin-right: 10px; font-size: 16px; text-align: center;; transition: color 0.3s ease; } */

</style>
