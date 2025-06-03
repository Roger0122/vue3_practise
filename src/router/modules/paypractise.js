export default [
{
    path: '/PaymentTypeEdit',
    name:'PaymentTypeEdit',
    component: () => import('@/view/Paymentload/PaymentTypeEdit.vue'),
},
{
    path: '/PaymentTypeEdit2',
    name:'PaymentTypeEdit2',
    component:() => import('@/view/Paymentload/PaymentTypeEdit2.vue'),
},
{
    path: '/ProductType',
    name: 'ProductType',
    component:() => import('@/view/base/ProductType.vue'),
},
{
    path: '/PaymentTypeEdit3',
    name:'PaymentTypeEdit3',
    component:() => import('@/view/Paymentload/PaymentTypeEdit3.vue'),
},
{
    path:'/addition',
    name:'addition',
    component: () => import('../../view/add/addition.vue')
}
]