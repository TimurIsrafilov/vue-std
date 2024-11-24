<template>
    <div class="container">
        <h1>Tasks</h1>
        <CustomButton @click="popupOpen" class="tasks_button">
            Task create
        </CustomButton>
        <PostList :tasks="$store.state.tasks" />
    </div>
</template>

<script>
import PostList from '@/components/PostList.vue';

export default {
    components: {
        PostList
    },
    data() {
        return {
            modificatorValue: "",
        }
    },
    methods: {
        popupOpen() {
            this.$store.commit("popupAddOpen");
        }
    }
}
</script>

<style scoped>
.tasks_button {
    border: 2px solid green;
}
</style>