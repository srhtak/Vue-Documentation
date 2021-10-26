import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: "HomePage",
        path: "/",
        component: () => import("./views/HomePage.vue")
    },
    {
        name: "newBookmark",
        path: "/new",
        component: () => import("./views/NewBookmark.vue")
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})


export default router;