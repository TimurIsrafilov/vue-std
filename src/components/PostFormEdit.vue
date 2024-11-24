<template>
    <form @submit.prevent class="container form">
        <h2>Task edit</h2>
        <CustomInput v-model="task.title" type="text" placeholder="Name" v-focus />
        <CustomInput v-model="task.body" type="text" placeholder="Description" />
        <CustomInput v-model="task.description" type="text" placeholder="Detail description" />
        <CustomButton class="button" @click="editTask(task)">Update task</CustomButton>
    </form>
</template>

<script>
export default {
    data() {
        return {
            task: {
                title: this.$store.state.taskForEdit.title,
                body: this.$store.state.taskForEdit.body,
                description: this.$store.state.taskForEdit.description,
                id: this.$store.state.taskForEdit.id,
            }
        };
    },
    methods: {
        editTask() {
            this.$store.commit("editTask", this.task);
        },
    },
}
</script>

<style scoped>
.form {
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>