import { createRouter, createWebHistory } from "vue-router";
import LinkListView from "../views/LinkListView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: LinkListView,
        },
        {
            path: "/links/",
            name: "links",
            component: () => import("../views/LinkView.vue"),
        },
        {
            path: "/links/:id",
            name: "link",
            component: () => import("../views/LinkView.vue"),
        },
    ],
});

export default router;
