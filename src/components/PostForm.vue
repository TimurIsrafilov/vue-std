<template>
    <form @submit.prevent class="container form">
        <h2>Task create</h2>
        <CustomInput v-model="task.title" type="text" placeholder="Name" v-focus />
        <CustomInput v-model="task.body" type="text" placeholder="Description" />
        <CustomInput v-model="task.description" type="text" placeholder="Deteil description" />
        <CustomButton class="button" @click="createTask(task)">Add task</CustomButton>
    </form>
</template>

<script>
export default {
    data() {
        return {
            task: {
                title: "",
                body: "",
                description: "",
            }
        }
    },
    methods: {
        createTask() {
            this.task.id = this.$store.state.tasks.length + 1;
            this.$store.commit("createTask", this.task);
            this.task = { title: "", body: "", description: "" };
        },
    }
}
</script>

<style scoped>
.form {
    padding: 15px;
}
</style>
