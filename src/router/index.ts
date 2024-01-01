import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/views/layout.vue"),
      redirect: "/home",
      children: [
        { path: "/home", component: () => import("@/views/home/home.vue") },
        { path: "/category", component: () => import("@/views/category/category.vue") }
      ]
    }
  ]
});

export default router;
