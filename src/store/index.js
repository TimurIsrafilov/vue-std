import { createStore } from "vuex";
import defaultTasks from "@/utils/constants";

export default createStore({
  state: {
    tasks: defaultTasks,
    taskForEdit: null,
    popupAdd: false,
    popupEdit: false,
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task);
      state.popupAdd = false;
    },
    deleteTask(state, taskId) {
      state.tasks = state.tasks.filter((i) => i.id !== taskId);
    },
    editTask(state, updatedTask) {
      const index = state.tasks.findIndex((task) => task.id === updatedTask.id);
      if (index !== -1) {
        state.tasks.splice(index, 1, updatedTask);
      }
      state.popupEdit = false;
    },
    popupAddOpen(state) {
      state.popupAdd = true;
    },
    popupEditOpen(state, task) {
      state.popupEdit = true;
      state.taskForEdit = task;
    },
  },
  actions: {},
});
