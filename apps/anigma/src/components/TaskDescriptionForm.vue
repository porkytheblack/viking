<script lang="ts">
import SelectInput from './SelectInput.vue'
export default {
    components: {
        SelectInput
    },
    data(){
        return {
            task_name: "",
            task_description: "",
            task_tags: [],
            id: "",
            task_status: "new"
        }
    },
    methods: {
        setTags(tags: any){
            this.task_tags = tags
        },
        save(){

        },
        delete(){

        }
    }
}
</script>

<template>
   <div class="flex flex-col items-center justify-center p-5 rounded-md border-green-500 ">
     <BaseInput 
        v-model="task_name" 
        label="Task Name"
        placeholder="Enter a name for the task"
    />
    <BaseInput
        v-model="task_description"
        inputType="textarea"
        placeholder="Describe this task"
        label="Task Description"
    />
    <TagsInput @change="setTags" />
    <select-input v-model="task_status" >
        <option value="new">
            New
        </option>
        <option value="in_progress">In Progress</option>
        <option value="cancelled">Cancelled</option>
        <option value="done">Done</option>
    </select-input>
    <div class="flex flex-row items-center justify-between w-full">
        <button class="flex items-center justify-center bg-green-500 text-white text-lg font-semibold pl-4 pr-4 pt-2 pb-2 rounded-md active:border-blue-300 active:border-[2px] ">
            Save
        </button>
        <button class="flex items-center justify-center bg-red-500 text-white text-lg font-semibold pl-4 pr-4 pb-2 pt-2 rounded-md active:border-yellow-300 active:border-[2px] ">
            Delete
        </button>
    </div>

   </div>
</template>

<style scoped>
</style>