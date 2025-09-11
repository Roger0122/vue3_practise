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
    {
        path:'/Valuation',
        name:'Valuation',
        component:() => import('@/view/other/Valuation.vue'),
    },
    {
        path:'/dataType',
        name:'dataType',
        component:() => import('@/view/other/dataType.vue'),
    },
    {
        path:'/arrayfn',
        name:'arrayfn',
        component:() => import('@/view/other/arrayfn.vue'),
    },
    {
        path:'/objectfn',
        name:'objectfn',
        component:() => import('@/view/other/objectfn.vue'),
    },
]