import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/Home.vue'
import AboutPage from '../views/About.vue'
import ProjectPage from '../views/Projects.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
        meta: { title: 'Homepage' },
    },
    {
        path: '/gh-pages/about',
        name: 'About',
        component: AboutPage,
        meta: { title: 'About Me' },
    },
    {
        path: '/gh-pages/projects',
        name: 'Projects',
        component: ProjectPage,
        meta: { title: 'The Projects' },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })

export default router