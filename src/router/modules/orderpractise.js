import todolist from '@/view/ToDolist/index.vue'
import bmi from '@/view/bmi/index.vue'
import shopcar from '@/view/ShopCar/ShopCar.vue'
import pdf from '@/view/pdf/pdf.vue'
import excel from '@/view/pdf/excel.vue'

export default [
    {
        path:'/todolist',
        name:'/todolist',
        component:todolist,
    },
    {
        path:'/bmi',
        name:'/bmi',
        component:bmi,
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

]