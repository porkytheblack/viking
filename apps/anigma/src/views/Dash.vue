<script lang="ts">
import DashboardSidebar from '../components/DashboardSidebar.vue'
export default {
    components: {
        DashboardSidebar
    }
}
</script>

<template>
    <div class="grid grid-cols-5 w-screen h-screen">
        <dashboard-sidebar/>
        <div class="grid col-span-4 my-1 mx-1 px-5 py-5 rounded-md border border-blue-400 ">
            <RouterView/>
        </div>
    </div>
</template>

<style scoped>
</style>