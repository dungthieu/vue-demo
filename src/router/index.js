import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Note",
    component: () =>
    import(/* webpackChunkName: "about" */ "../pages/note.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
