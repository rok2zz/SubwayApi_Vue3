import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@views/Dashboard.vue'
import { useCounterStore } from '@/stores'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/demo',
            name: 'demo',
            component: () => import('@views/DemoPage.vue')
        },
        {
            path: '/not',
            name: 'notfound',
            component: () => import('@views/NotFoundPage.vue')
        }
    ],
})

router.beforeEach((to, from, next) => {
    console.log(useCounterStore)
    next()
})

export default router