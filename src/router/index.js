import {createRouter, createWebHistory } from 'vue-router';
import home from '@/home/index.vue';
import vuepractise from '@/router/modules/vuepractise.js';
import jspractise from '@/router/modules/jspractise.js';
import orderpractise from '@/router/modules/orderpractise.js'
import paypractise from '@/router/modules/paypractise.js';
import weather from '@/router/modules/weather.js'
import pos from '@/router/modules/pos.js'
import other from '@/router/modules/other.js'
import api from '@/router/modules/API.js'
import htmlLearn from '@/router/modules/htmllearn.js'

const router = createRouter({
history: createWebHistory(),
routes: [
    { path:'/', name: 'home',component: home,},
    ...htmlLearn,
    ...vuepractise,
    ...jspractise,
    ...orderpractise,
    ...paypractise,
    ...weather,
    ...pos,
    ...other,
    ...api,
],
})
export default router