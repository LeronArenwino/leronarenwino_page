import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Error from "../views/ErrorView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      alias: ["/home"],
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/knowledge",
      name: "knowledge",
      component: () => import("../views/KnowledgeView.vue"),
    },
    {
      path: "/yardsale",
      name: "yardsale",
      component: () => import("../views/yardsale/YardSaleView.vue"),
      children: [
        {
          path: "email",
          name: "yardsale-email",
          component: () => import("../views/yardsale/YardSaleEmailView.vue"),
        },
        {
          path: "password",
          name: "yardsale-password",
          component: () => import("../views/yardsale/YardSalePasswordView.vue"),
        },
      ],
    },
    { path: "/404", component: Error },
    {
      path: "/:catchAll(.*)",
      redirect: "404",
    },
  ],
});

export default router;
