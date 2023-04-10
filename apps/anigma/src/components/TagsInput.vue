<script lang="ts" >
import Tag from './Tag.vue'
export default {
    data(): {
        new_tag: string,
        tags: string[]
    }{
        return {
            new_tag: "",
            tags: []
        }
    },
    methods: {
        addTag(value: string){
            this.tags.push(value)
        },
        removeTag(id: number){
            this.tags.splice(id, 1)
        }
    },
    watch: {
        'tags.length'(){
            this.$emit('change', [...this.tags])
        }
    },
    components: {
        Tag
    },
    emits: ["change"]
}
</script>
<template>
<div class="flex flex-col w-full">
    <BaseInput
        placeholder="Enter a tag and hit enter."
        label="Tags"
        v-model="new_tag"
        @tag-add="addTag"
    />
    <div  class="flex flex-row flex-wrap w-full">
        <Tag
            v-for="tag, index in tags"
            :tag="tag"
            :id="index"
            @remove="removeTag"
        />
    </div>
</div>
</template>
<scoped>

</scoped>