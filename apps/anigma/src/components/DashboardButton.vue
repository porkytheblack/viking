<script lang="ts" >
import router from '@/router';
export default {
    props: {
        icon: String,
        color: String,
        active: Boolean,
        path: String
    },
    emits: [
        "click"
    ],
    methods: {
        onClick(){
            this.path && router.push(this.path)
            this.$emit('click')
        }
    }
}
</script>
<template>
    <div @click="onClick" :class="[active ? 'bg-slate-300' : '']" class="button flex cursor-pointer px-2 w-full h-full hover:bg-slate-300 flex-row items-center justify-between">
        <p class="font-bold text-lg items-center" :class="[color === undefined ? 'text-blue-400' : color]" >
            <slot name="title" ></slot>
        </p>
        <vue-feather v-if="icon !== undefined" :class="[color === undefined ? 'text-blue-400' : color]"  :type="icon" />
    </div>
</template>
