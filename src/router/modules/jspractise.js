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
]