<template>
  <main>
    <h1>Todo_list</h1>
  </main>

  <input
    placeholder="請輸入代辦事項"
    v-model="content"
  />
  <button @click="summit">送出</button>

  <p>輸入文字: {{ content }}</p>

  <div v-for="(item, index) in TodoList" :key="item.id">
    {{ item.title }}
    <button @click="remove(index)">remove</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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
</script>

<style scoped>
</style>
