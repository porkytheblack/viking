<script lang="ts" >
export default {
    props: {
        modelValue: String
    },
    emits: ["update:modelValue"]
}
</script>
<template>
    <select :value="modelValue" @change="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" class="w-full px-2 py-2 rounded-lg mb-3 border-2 border-blue-400 flex flex-row items-center justify-center" placeholder="Select something" >
        <slot></slot>
    </select>
</template>
<style scoped>
</style>
