// src/menu.ts
export type NavItem = { label: string; to: string };
export type NavGroup = { id: string; label: string; items: NavItem[] };

export const NAV_GROUPS: NavGroup[] = [
  {
    id:'hmtl',
    label:'html 關聯',
    items:[
      {label: 'html_learn', to: '/html_learn'},
    ],
  },
  {
    id: 'vue',
    label: 'Vue 關聯',
    items: [
      { label: '01_props', to: '/01_props' },
      { label: 'newfather', to: '/newfather' },
      { label: '02_emit', to: '/02_emit' },
      { label: '03_event-bus', to: '/03_event-bus' },
      { label: '04_V_model', to: '/04_V_model' },
      { label: '05_useAttrs', to: '/05_useAttrs' },
      { label: '06_ref', to: '/06_ref' },
      { label: '07_provide_inject', to: '/07_provide_inject' },
      { label: '08_slot_test', to: '/08_slottest' },
      { label: '08-2_slot01', to: '/08_slottest/slot01' },
      { label: '09_vbind', to: '/09_v_bind' },
    ],
  },
  {
    id: 'js',
    label: 'JS 關聯',
    items: [
      { label: '/jslearn', to: '/jslearn' },
      { label: '/jslearn2', to: '/jslearn2' },
      { label: '/jslear3', to: '/jslearn3' },
      { label: '/jslear4', to: '/jslearn4' },
      { label: '/jslear5', to: '/jslearn5' },
      { label: '/jslear6', to: '/learn6' },
      { label: '/modal', to: '/modal' },
    ],
  },
  {
    id: 'apps',
    label: '範例 Apps',
    items: [
      { label: 'todolist', to: '/todolist' },
      { label: 'bmi', to: '/bmi' },
      { label: 'shopcar', to: '/shopcar' },
      { label: 'pdf', to: '/pdf' },
      { label: 'excel', to: '/excel' },
      { label: 'multiplicationTable', to: '/multiplicationTable' },
    ],
  },
  {
    id: 'payment',
    label: 'Payment 編輯',
    items: [
      { label: 'PaymentTypeEdit', to: '/PaymentTypeEdit' },
      { label: 'PaymentTypeEdit2', to: '/PaymentTypeEdit2' },
      { label: 'PaymentTypeEdit3', to: '/PaymentTypeEdit3' },
      { label: 'PaymentTypeEdit4', to: '/PaymentTypeEdit4' },
      { label: 'PaymentTypeEdit5', to: '/PaymentTypeEdit5' },
      { label: 'ProductType', to: '/ProductType' },
    ],
  },
  {
    id: 'misc',
    label: '其他',
    items: [
      { label: 'weather1', to: '/weather1' },
      { label: 'addition', to: '/addition' },
    ],
  },
  {
    id: 'pos',
    label: 'POS',
    items: [{ label: 'POS', to: '/pos' }],
  },
  {
    id: 'other',
    label: 'other',
    items: [
      { label: 'other', to: '/other' },
      { label: '變數差異', to: '/varDifferent'},
      { label: '賦值', to:'/Valuation'},
      { label: '資料型別', to:'/datatype'},
      { label: '陣列方法', to:'/arrayfn'},
      { label: '物件操作', to:'/objectfn'},
    ],
  },
    {
    id: 'API',
    label: 'API',
    items: [
      { label: 'API1', to: '/API1' },
    ],
  },
];
