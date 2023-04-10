<script lang="ts" >
export default {
    props: {
        tag: String,
        id: Number
    },
    emits: ['remove']
}
</script>
<template>
    <div class="flex border-[1px] rounded-lg border-red-400 mr-2 mb-1 flex-row items-center space-between p-2">
        <p class="font-bold mr-2 ">
            {{ tag }}
        </p>
        <vue-feather type="x-circle" class="cursor-pointer" @click="$emit('remove', id)" ></vue-feather>
    </div>
</template>
<style scoped ></style>d