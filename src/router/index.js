import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'
import adminRoutes from "@/applications/Admin/routes";
import publicRoutes from "@/applications/Public/routes";

Vue.use(VueRouter)

const routes = [
    adminRoutes,
    publicRoutes,
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.isAuthenticated) {
            next("/login");
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
