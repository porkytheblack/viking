<script lang="ts" >
export default {
    props: {
        src: String
    }
}
</script>
<template>
    <div class="flex flex-col items-center overflow-hidden  justify-center rounded-full h-12 w-12 border-2  border-blue-500 ">
        <img alt="avatar" class=" w-full h-full" :src="src" />
    </div>
</template>