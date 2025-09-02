<template>
  <section class="nav-section">
    <button
      class="section-toggle"
      :aria-expanded="isOpen"
      :aria-controls="panelId"
      @click="$emit('toggle', group.id)"
    >
      {{ group.label }}
      <span class="chevron" :class="{ open: isOpen }">▾</span>
    </button>

    <ul
      :id="panelId"
      v-show="isOpen"
      class="links"
    >
      <li v-for="item in group.items" :key="item.to">
        <RouterLink class="link" :to="item.to">
          <slot name="icon" />
          {{ item.label }}
        </RouterLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { NavGroup } from '@/composites/menu/menu.ts';

const props = defineProps<{
  group: NavGroup;
  isOpen: boolean;
}>();

const panelId = `panel-${props.group.id}`;
</script>

<style scoped>
.nav-section { margin-right: 20px; }
.section-toggle {
  background: transparent;
  color: #fff;
  border: 0;
  font-weight: 700;
  cursor: pointer;
}
.chevron { display: inline-block; transition: transform .2s; }
.chevron.open { transform: rotate(180deg); }
.links { margin-top: 6px; }
.link {
  display: inline-block;
  margin-right: 10px;
  padding: 2px 0;
  color: #fff;
}
.link.router-link-active { text-decoration: underline; }
</style>
