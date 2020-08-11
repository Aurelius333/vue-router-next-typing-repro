import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import index from "./views/index.vue";
import "./index.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: index }],
});

createApp(App).use(router).mount("#app");
