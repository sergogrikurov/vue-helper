import { createRouter, createWebHistory, RouterView } from "vue-router";
import Home from "../views/Home.vue";
import Integrations from "@/views/Integrations.vue";
import Slider from "@/views/Slider.vue";
import Inputs from "@/views/Inputs.vue";

const routes = [
  {
    path: "/:lang(en|ru)",
    component: RouterView,
    children: [
      { path: "", name: "home", component: Home },
      { path: "integrations", name: "integrations", component: Integrations },
      { path: "slider", name: "slider", component: Slider },
      { path: "inputs", name: "inputs", component: Inputs },
    ],
  },
  { path: "/", redirect: "/en" },
];

const router = createRouter({
  history: createWebHistory("/vue-helper/"),
  routes,
});

export default router;
