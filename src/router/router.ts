import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        component: () => import('@/views/index.vue')
    },
    {
        path: '/write',
        component: () => import('@/views/write/write.vue')
    },
    {
        path: '/read',
        component: () => import('@/views/read/read.vue')
    }
]
const router = createRouter({
    history:  createWebHistory(),
    routes
})
export default router