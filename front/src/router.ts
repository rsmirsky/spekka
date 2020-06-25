import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/home/home.vue';
import Services from '@/components/subscription/subscription.vue';
import Biography from '@/components/prices/prices.vue';
import Blog from '@/components/about/about.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/subscription',
      name: 'services',
      component: Services
    },
    {
      path: '/prices',
      name: 'biography',
      component: Biography
    },
    {
      path: '/about',
      name: 'blog',
      component: Blog
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 300)
    })
  }
})
