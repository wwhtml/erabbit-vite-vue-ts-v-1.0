import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0, left: 0 };
  },
  routes: [
    {
      path: "/",
      component: () => import("@/views/layout.vue"),
      redirect: "/home",
      children: [
        { path: "/home", component: () => import("@/views/home/home.vue") },
        {
          path: "/category/1/:id",
          component: () => import("@/views/category/category-level-first/category-level-first.vue")
        },
        {
          path: "/category/2/:id",
          component: () =>
            import("@/views/category/category-level-second/category-level-second.vue")
        }
      ]
    }
  ]
});

export default router;
