import {createRouter, createWebHistory } from 'vue-router';
import home from '@/home/index.vue';
import props from '@/view/01_props/father.vue';
import emit from '@/view/02_emit/eventTest.vue';
import event from '@/view/03_event-bus/eventFather.vue';
import model from '@/view/04_V_model/VmodelTest.vue';
import useAttrs from '@/view/05_useAttrs/useAttrsTest.vue';
import ref from '@/view/06_ref/reftest.vue';
import slotTest from '@/view/08_slot/slottest.vue'
import slot01 from '@/view/08_slot/slot01.vue'
import provide from '@/view/07_provide_inject/provide_injecttest.vue'
import jslearn from '@/view/javaScript_learn/index.vue'
import jslearn2 from '@/view/javaScript_learn/learn2.vue'
import jslearn3 from '@/view/javaScript_learn/learn3.vue'
import todolist from '@/view/ToDolist/index.vue'
import jslearn4 from '@/view/javaScript_learn/learn4.vue'
import bmi from '@/view/bmi/index.vue'
import shopcar from '@/view/ShopCar/ShopCar.vue'
import pdf from '@/view/pdf/pdf.vue'
import excel from '@/view/pdf/excel.vue'
import vbind from '@/view/09_bind/v_bind.vue'
import PaymentTypeEdit from '@/view/Paymentload/PaymentTypeEdit.vue'
import PaymentTypeEdit2 from '@/view/Paymentload/PaymentTypeEdit2.vue'

const router = createRouter({
history: createWebHistory(),
routes: [
    {
        path:'/',
        name: 'home',
        component: home,
    },
    {
        path:'/01_props',
        name:'/01_props',
        component: props,
    },
    {
        path:'/02_emit',
        name:'/02_emit',
        component: emit,
    },
    {
    
        path:'/03_event-bus',
        name:'/03_event-bus',
        component: event,
    },
    {
        path:'/04_V_model',
        name:'/04_V_model',
        component: model,
    },
    {
        path:'/05_useAttrs',
        name:'/05_useAttrs',
        component: useAttrs,
    },
    {
        path:'/06_ref',
        name:'/06_ref',
        component: ref,
    },
    {
        path:'/07_provide_inject',
        name:'/07_provide_inject',
        component: provide,
    },
    {
        path:'/08_slottest',
        name:'/08_slottest',
        component: slotTest,
        children: [
            {
            path:'/08_slottest/slot01',
            name:'slot01',
            component: slot01,
            }
        ],
    },
    {
        path:'/09_v_bind',
        name:'/09_v_bind',
        component: vbind,
    },
    {
        path:'/jslearn',
        name:'/jslearn',
        component: jslearn,
    },
    {
        path:'/jslearn2',
        name:'/jslearn2',
        component:jslearn2
        ,
    },
    {
        path:'/jslearn3',
        name:'/jslearn3',
        component:jslearn3
        ,
    },
    {
        path:'/jslearn4',
        name:'/jslearn4',
        component:jslearn4
        ,
    },
    {
        path:'/todolist',
        name:'/todolist',
        component:todolist
        ,
    },
    {
        path:'/bmi',
        name:'/bmi',
        component:bmi
        ,
    },
    {
        path:'/shopcar',
        name:'/shopcar',
        component:shopcar
        ,
    },
    {
        path:'/pdf',
        name:'/pdf',
        component:pdf,
    },
    {
        path:'/excel',
        name:'/excel',
        component:excel,
    },
    {
        path: '/PaymentTypeEdit',
        name:'/PaymentTypeEdit',
        component:PaymentTypeEdit
    },
    {
        path: '/PaymentTypeEdit2',
        name:'/PaymentTypeEdit2',
        component:PaymentTypeEdit2
    },
],
})
export default router