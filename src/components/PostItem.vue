<template>
    <div @click.stop="$router.push(`/tasks/${task.id}`)" class="task">
        <div>
            <p><strong>Task: </strong> {{ task.title }}</p>
            <p><strong>Description: </strong> {{ task.body }}</p>
        </div>
        <div class="buttons_container">
            <CustomButton @click.stop="deleteTask(task.id)" class="task_button_delete">Task delete</CustomButton>
            <CustomButton @click.stop="popupOpen(task)" class="task_button_edit">
                Task edit
            </CustomButton>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        task: {
            type: Object,
            required: true
        }
    },
    methods: {
        deleteTask(taskId) {
            this.$store.commit("deleteTask", taskId);
        },
        editTask(taskId) {
            this.$store.commit("editTask", taskId);
        },
        popupOpen(task) {
            this.$store.commit("popupEditOpen", task);
        },
    },
}
</script>

<style scoped>
.task {
    padding: 15px;
    border: 2px solid grey;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    gap: 12px;
    width: 100%;
}

.buttons_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 12px
}

.task_button_delete {
    border: 2px solid red;
}

.task_button_edit {
    border: 2px solid blue;
}
</style>