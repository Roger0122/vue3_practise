import PaymentTypeEdit from '@/view/Paymentload/PaymentTypeEdit.vue'
import PaymentTypeEdit2 from '@/view/Paymentload/PaymentTypeEdit2.vue'
import PaymentTypeEdit3 from '@/view/Paymentload/PaymentTypeEdit3.vue'
import ProductType from '@/view/base/ProductType.vue'

export default [
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
    {
        path: '/ProductType',
        name: '/ProductType',
        component:ProductType
    },
    {
        path: '/PaymentTypeEdit3',
        name:'/PaymentTypeEdit3',
        component:PaymentTypeEdit3
    },
]