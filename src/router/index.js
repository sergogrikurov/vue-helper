import { createRouter, createWebHistory, RouterView } from "vue-router";
import Home from "../views/Home.vue";
import Slider from "@/views/Slider.vue";
import Inputs from "@/views/Inputs.vue";

const routes = [
  {
    path: "/:lang(en|ru)",
    component: RouterView,
    children: [
      { path: "", name: "home", component: Home },
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
