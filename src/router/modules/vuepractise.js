import props from '@/view/01_props/father.vue';
import emit from '@/view/02_emit/eventTest.vue';
import event from '@/view/03_event-bus/eventFather.vue';
import model from '@/view/04_V_model/VmodelTest.vue';
import useAttrs from '@/view/05_useAttrs/useAttrsTest.vue';
import ref from '@/view/06_ref/reftest.vue';
import slotTest from '@/view/08_slot/slottest.vue';
import slot01 from '@/view/08_slot/slot01.vue';
import provide from '@/view/07_provide_inject/provide_injecttest.vue';
import vbind from '@/view/09_bind/v_bind.vue'; 


export default [
  {
    path: '/01_props',
    name: '01_props',
    component: props,
  },
  {
    path: '/02_emit',
    name: '02_emit',
    component: emit,
  },
  {
    path: '/03_event-bus',
    name: '03_event-bus',
    component: event,
  },
  {
    path: '/04_V_model',
    name: '04_V_model',
    component: model,
  },
  {
    path: '/05_useAttrs',
    name: '05_useAttrs',
    component: useAttrs,
  },
  {
    path: '/06_ref',
    name: '06_ref',
    component: ref,
  },
  {
    path: '/07_provide_inject',
    name: '07_provide_inject',
    component: provide,
  },
  {
    path: '/08_slottest',
    name: '08_slottest',
    component: slotTest,
    children: [
      {
        path: 'slot01', 
        name: 'slot01',
        component: slot01,
      },
    ],
  },
  {
    path: '/09_v_bind',
    name: '09_v_bind',
    component: vbind,
  },
];
