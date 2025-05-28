import {createRouter, createWebHistory } from 'vue-router';
import home from '@/home/index.vue';
import vuepractise from '@/router/modules/vuepractise.js';
import jspractise from '@/router/modules/jspractise.js';
import orderpractise from '@/router/modules/orderpractise.js'
import paypractise from '@/router/modules/paypractise.js';

const router = createRouter({
history: createWebHistory(),
routes: [
    { path:'/', name: 'home',component: home,},
    ...vuepractise,
    ...jspractise,
    ...orderpractise,
    ...paypractise,
],
})
export default router