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
      path: "/yardsale",
      name: "yardsale",
      redirect: "/yardsale/home",
      component: () => import("../views/yardsale/YardSaleView.vue"),
      children: [
        {
          path: "home",
          name: "yardsale-home",
          component: () => import("../views/yardsale/YardSaleHomeView.vue"),
        },
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
        {
          path: "login",
          name: "yardsale-login",
          component: () => import("../views/yardsale/YardSaleLoginView.vue"),
        },
        {
          path: "signup",
          name: "yardsale-signup",
          component: () => import("../views/yardsale/YardSaleSignUpView.vue"),
        },
        {
          path: "account",
          name: "yardsale-account",
          component: () => import("../views/yardsale/YardSaleAccountView.vue"),
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
