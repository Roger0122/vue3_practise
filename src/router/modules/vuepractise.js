export default [
  {
    path: '/01_props',
    name: '01_props',
    component: () => import('@/view/01_props/father.vue')
  },
  {
    path:'/newfather',
    name:'newfather',
    component:() => import('@/view/01_props/newfather.vue')
  },
  {
    path: '/02_emit',
    name: '02_emit',
    component: () => import('@/view/02_emit/eventTest.vue')
  },
  {
    path: '/03_event-bus',
    name: '03_event-bus',
    component: () => import('@/view/03_event-bus/eventFather.vue')
  },
  {
    path: '/04_V_model',
    name: '04_V_model',
    component: () => import('@/view/04_V_model/VmodelTest.vue')
  },
  {
    path: '/05_useAttrs',
    name: '05_useAttrs',
    component: () => import('@/view/05_useAttrs/useAttrsTest.vue')
  },
  {
    path: '/06_ref',
    name: '06_ref',
    component: () => import('@/view/06_ref/reftest.vue')
  },
  {
    path: '/07_provide_inject',
    name: '07_provide_inject',
    component: () => import('@/view/07_provide_inject/provide_injecttest.vue'),
  },
  {
    path: '/08_slottest',
    name: '08_slottest',
    component: () => import('@/view/08_slot/slottest.vue'),
    children: [
      {
        path: 'slot01', 
        name: 'slot01',
        component: () => import('@/view/08_slot/slot01.vue'),
      },
    ],
  },
  {
    path: '/09_v_bind',
    name: '09_v_bind',
    component: () => import('@/view/09_bind/v_bind.vue'),
  },
];
