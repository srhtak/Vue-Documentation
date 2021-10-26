import { createRouter, createWebHistory } from "vue-router"
//import Home from './views/home'

const routes = [
    {
        path: "/",
        //component: Home,
        component: () => import("./views/home")
    },
    {
        path: "/about",
        //component: Home,
        component: () => import("./views/about")
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;