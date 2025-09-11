export default [
    {
        path:'/other',
        name:'other',
        component:() => import('@/view/other/other.vue'),
    },
        {
        path:'/varDifferent',
        name:'varDifferent',
        component:() => import('@/view/other/varDifferent.vue'),
    },
]