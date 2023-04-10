<script lang="ts" >
export default {
    props: {
        iconName: String,
        color: String
    },
    emits: ['click']
}
</script>
<template>
    <button @click="$emit('click')" class="flex flex-row items-center mr-2 justify-center py-3 px-3 bg-slate-100 rounded-md ">
        <vue-feather :type="iconName" :fill="color"  />
    </button>
</template>
