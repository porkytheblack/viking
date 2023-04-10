<script lang="ts" >
import DashboardButton from './DashboardButton.vue'
export default {
    components: {
        DashboardButton
    }
}
</script>
<template>
    <div class="grid w-full grid-rows-[200px_50px_50px_50px_50px_50px_auto] bg-slate-50 ">
        <div class="flex flex-col items-center justify-center bg-slate-100 rounded-lg w-full h-full">
            <avatar src="https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=Felix" />
            <p class="font-bold text-lg mt-1 text-amber-700 ">
                Felix
            </p>
        </div>
        <dashboard-button color="text-yellow-400" path="dashboard/" icon="edit-2"  >
            <template v-slot:title >
                Create
            </template>
        </dashboard-button>
        <dashboard-button icon="feather"  >
            <template v-slot:title >
                New 
            </template>
        </dashboard-button>
        <dashboard-button color="text-blue-700" path="dashboard/inprogress" icon="loader"  >
            <template v-slot:title >
                In Progress 
            </template>
        </dashboard-button>
        <dashboard-button color="text-green-500" path="dashboard/done" icon="check"  >
            <template v-slot:title >
                Done
            </template>
        </dashboard-button>
        <dashboard-button color="text-green-500" path="dashboard/cancelled" icon="x-octagon"  >
            <template v-slot:title >
                Cancelled
            </template>
        </dashboard-button>
            <div class="flex flex-col items-center justify-end w-full h-full pb-5 ">
                <div class="flex w-full h-10">
                    <dashboard-button color="text-green-500" path="/" icon="log-out"  >
                        <template v-slot:title >
                            Logout
                        </template>
                    </dashboard-button>
                </div>
                
        </div>
    </div>
</template>