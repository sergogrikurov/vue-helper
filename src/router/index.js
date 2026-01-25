import { createRouter, createWebHistory, RouterView } from "vue-router";
import Home from "../views/Home.vue";
import Slider from "@/views/Slider.vue";

const routes = [
  {
    path: "/:lang(en|ru)",
    component: RouterView,
    children: [
      { path: "", name: "home", component: Home }, //alias: ["/"]//
      { path: "slider", name: "slider", component: Slider },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/vue-helper/"),
  routes,
});

export default router;
