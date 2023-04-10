<script lang="ts" >
import TaskBadge from './TaskBadge.vue'
import SelectInput from './SelectInput.vue';
export default {
    components: {
        TaskBadge,
        SelectInput
    },
    props: {
        status: {
            type: String,
            default: 'New'
        },
        title: {
            type: String,
            default: "Your task"
        },
        description: {
            type: String,
            default: ""
        },
        id: String
    },
    emits: [
        "edit",
        "delete",
        "statusChange"
    ],
    data(){
        return {
            cStatus: ""
        }
    },
    mounted(){
        this.cStatus = this.status
    },
    watch: {
        cStatus(newVal, oldVal){
            console.log("Updating status")
        }
    }
}
</script>
<template>
    <div class="flex flex-col items-center mb-5 justify-start w-full border border-blue-400 rounded-lg py-4 px-2">
        <div class="flex flex-row items-center py-3 px-2 justify-between w-full rounded-md bg-slate-100">
            <h4 class="font-semibold text-lg text-blue-400">
                {{ title }}
            </h4>
            <task-badge tag="In Progress" />
        </div>
        <p class="text-emerald-500 mt-5 px-2 font-medium italic " >
            {{ description }}
        </p>
        <div class="flex flex-row mt-5 items-center w-full justify-between">
            <div class="flex ">
                <select-input v-model="cStatus" >
                    <option value="new">
                        New
                    </option>
                    <option value="in_progress">In Progress</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="done">Done</option>
                </select-input>
            </div>
            <div class="flex flex-row justify-around items-center">
                <icon-button icon-name="edit" @click="$emit('edit')" />
                <icon-button icon-name="trash-2" @click="$emit('delete')" />
            </div>
        </div>
    </div>
</template>