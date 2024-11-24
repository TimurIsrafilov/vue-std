import Main from "@//pages/Main.vue";
import Task from "@//pages/Task.vue";
import Tasks from "@//pages/Tasks.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/tasks",
    component: Tasks,
  },
  {
    path: "/tasks/:id",
    component: Task,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
