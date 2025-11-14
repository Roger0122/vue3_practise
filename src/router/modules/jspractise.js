export default [
    {
        path:'/jslearn',
        name:'jslearn',
        component: () => import('@/view/javaScript_learn/index.vue')
    },
    {
        path:'/jslearn2',
        name:'jslearn2',
        component: () => import('@/view/javaScript_learn/learn2.vue')
        ,
    },
    {
        path:'/jslearn3',
        name:'jslearn3',
        component: () => import('@/view/javaScript_learn/learn3.vue')
        ,
    },
    {
        path:'/jslearn4',
        name:'jslearn4',
        component: () => import('@/view/javaScript_learn/learn4.vue')
    },
    {
        path:'/jslearn5',
        name:'jslearn5',
        component: () => import('@/view/javaScript_learn/learn5.vue')
    },
    {
        path:'/learn6',
        name:'learn6',
        component:() => import('@/view/javaScript_learn/learn6.vue')
    },  
    {
        path:'/learn7',
        name:'learn7',
        component:() => import('@/view/javaScript_learn/learn7.vue')
    }, 
    {   path:'/modal',
        name:'modal',
        component:() => import('@/view/modal/modal.vue')
    },
]