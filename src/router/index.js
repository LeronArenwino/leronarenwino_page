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
      meta: { toTop: true },
      alias: ["/home"],
    },
    { path: "/404", component: Error },
    {
      path: "/:catchAll(.*)",
      redirect: "404",
    },
  ],
  scrollBehavior(to) {
    const scroll = {};

    if (to.meta.toTop) scroll.top = 0;

    return scroll;
  },
});

export default router;
