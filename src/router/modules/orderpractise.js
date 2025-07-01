export default [
    {
        path:'/todolist',
        name:'todolist',
        component:() => import('@/view/ToDolist/index.vue'),
    },
    {
        path:'/bmi',
        name:'bmi',
        component:() => import('@/view/bmi/index.vue'),
    },
    {
        path:'/shopcar',
        name:'shopcar',
        component:() => import('@/view/ShopCar/ShopCar.vue'),
    },
    {
        path:'/pdf',
        name:'pdf',
        component:() => import('@/view/pdf/pdf.vue'),
    },
    {
        path:'/excel',
        name:'excel',
        component:() => import('@/view/pdf/excel.vue'),
    },
    {
        path:'/multiplicationTable',
        name:'multiplicationTable',
        component:() => import('@/view/multiplication/multiplicationTable.vue'),
    },
]