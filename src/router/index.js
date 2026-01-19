import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'top',
            component: () => import('../views/TopView.vue')
        },
        {
            path: '/notes/:createdAt',
            name: 'note',
            component: () => import('../views/NoteView.vue')
        },
        {
            path: '/notes/new',
            name: 'new',
            component: () => import('../views/NewView.vue')
        }
    ]
})

export default router