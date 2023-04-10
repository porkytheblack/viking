<script lang="ts" >
export default {
    props: {
        tag: String,

    }
}
</script>
<template>
    <div class="flex flex-row items-center justify-center px-2 py-2 bg-slate-200 rounded-lg">
        <p class="font-bold mr-2 " >
            {{ tag }}
        </p>
        <vue-feather class="text-blue-400" v-if="tag === 'New'" />
        <vue-feather class="text-green-500" type="loader" v-if="tag === 'In Progress'"/>
        <vue-feather class="text-red-600" type="x-octagon" v-if="tag === 'Cancelled'" />
    </div>
</template>
