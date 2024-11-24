<template>
    <div class="container">
        <div v-if="tasks.length > 0" class="container">
            <h3 v-if="tasks.length > 0">Tasks list</h3>
            <PostItem v-for="task in tasks" :task="task" key="task.id" />
        </div>
        <h3 v-else class="text">Task list is empty</h3>
    </div>
</template>

<script>
import PostItem from '@/components/PostItem.vue';
export default {
    components: {
        PostItem
    },
    props: {
        tasks: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.text {
    color: red;
}
</style>