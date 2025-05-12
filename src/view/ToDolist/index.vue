<template>
  <h1>Todo_list</h1>
  
  <form @submit.prevent="summit">
  <input
    placeholder="請輸入代辦事項"
    v-model="content"
  />
  <MyButton type="primary" @onClick="summit">送出</MyButton>
  </form>


  <div v-for="(item, index) in TodoList" :key="item.id">
    {{ item.title }}
    <MyButton type="danger" @onClick="remove(index)">remove</MyButton>
    <MyButton type="secondary" @onClick="edit(index)">edit</MyButton>
  </div>

  <div v-if="editShow" class="modal-overlay" @click.self="editShow = false">
    <EditTodoList
    :modelValue ="editContent"
    @update="applyEdit"
    @cancel="editShow = false"
    />
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import EditTodoList from '@/components/todo/EditTodoList.vue'
import MyButton from '@/view/ui/button.vue'

const editShow = ref(false)
const editContent = ref('')
const editingIndex = ref<number | null>(null)

const content = ref('')
const TodoList = ref([
  { id: 1, title: '該做1' },
  { id: 2, title: '該做的事2' },
  { id: 3, title: '該做的事3' }
])

let nextTodoId = 4

const summit = () => {
  if (content.value !== '') {
    TodoList.value.push({
      id: nextTodoId++,
      title: content.value
    })
    content.value = ''
  }
}

const remove = (index: number) => {
  TodoList.value.splice(index, 1)
}

const edit = (index: number) => {
  editShow.value = true
  editingIndex.value = index
  editContent.value = TodoList.value[index].title
}

const applyEdit = (newTitle: string) => {
  if (editingIndex.value !== null){
    TodoList.value[editingIndex.value].title = newTitle
  }
  editShow.value = false
}

</script>

<style scoped>
.modal-overlay{
position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
div{
  margin-top: 5px;
}
</style>
