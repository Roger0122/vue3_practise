<template>
    <div>
        <h1>編輯代辦事項</h1>
    </div>
    <input type="text" v-model="editContent" ref="inputRef">
    <MyButton type="primary" @onClick="confirm">確認</MyButton>
    <MyButton type="cancel" @onClick="$emit('cancel')">取消</MyButton>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import MyButton from '@/view/ui/button.vue'

const inputRef = ref<HTMLInputElement | null>(null)


const props = defineProps<{
 modelValue: string
}>()

const emit = defineEmits<{
    (e: 'update', value: string): void
    (e: 'cancel') : void
}>()

const editContent = ref (props.modelValue)

watch(() => props.modelValue, (newVal) => {
    editContent.value = newVal
})


const confirm = () => {
    emit('update', editContent.value)
}

onMounted(() => {
    window.addEventListener('keydown', escHandler)

    nextTick(() => {
    inputRef.value?.focus()
  })

})

onBeforeUnmount(() => {
    window.removeEventListener('keydown', escHandler)
})

const escHandler = (e: keyboardEvent) => {
    if (e.key === 'Escape'){
        emit('cancel')
    }
}


</script>

<style scoped>
</style>