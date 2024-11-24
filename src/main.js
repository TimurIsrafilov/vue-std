import { createApp } from "vue";
import App from "@/components/App.vue";
import components from "@//ui/index";
import directives from "@/directives/index";
import router from "@/router/router";
import store from "@/store/index";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(router).use(store).mount("#app");
