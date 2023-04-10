<script lang="ts" >
export default {
    props: {
        label: {
            type: String
        },
        placeholder: {
            type: String,
            default: "Start typing..."
        },
        modelValue: String,
        inputType: {
            type: String,
            default: "text"
        }
    },
    emits: ["update:modelValue", "tagAdd"],
    methods: {
        updateValue(e: Event){
            this.$emit("update:modelValue", (e?.target as HTMLInputElement)?.value)
        },
        onKeyDown(e: KeyboardEvent){
            if (e.key === "Enter"){
                this.$emit('tagAdd', this.modelValue)
                this.$emit("update:modelValue", "")
            }
        }
    }
}
</script>
<template>
    <div class="flex w-full flex-col mb-4 " >
        <label class="text-left font-semibold " >
            {{
                label
            }}
        </label>
        <input
            v-if="inputType !== 'textarea'"
            :type="inputType"
            :placeholder="placeholder"
            :value="modelValue"
            class="outline-blue-100 p-2  text-lg border-[1px] border-solid border-blue-100 rounded-md "
            @input="updateValue"
            @keydown="onKeyDown"
        />
        <textarea
            v-if="inputType === 'textarea'"
            :type="inputType"
            :placeholder="placeholder"
            :value="modelValue"
            class="outline-blue-100 p-2  text-lg border-[1px] border-solid border-blue-100 rounded-md "
            @input="updateValue"
        />
    </div>
</template>
<style scoped>
</style>
