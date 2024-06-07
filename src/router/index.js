import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Stories from '../views/Stories.vue'
import Write from '../views/Write.vue'
import Error from '../views/Error.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    console.log('SavedPosition', savedPosition)

    if (savedPosition) {
      return savedPosition
    }

    return { top: 0, left: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/stories',
      name: 'Stories',
      component: () => import('../views/Stories.vue'),
    
      // ,beforeEnter() {
      //   alert('You are not authorized to view this page')
      //   // block navigation
      //   return false
      // }
    },

      {
        path: '/Write',
        name: 'write',
        component: ()=>import('../views/Write.vue')
      },
      {
        path: '/stories/:title',
        name: 'Technology',
        component: () => import('../views/Technology.vue'),
        props: true
      },
    
    {
      path: '/:catchAll(.*)',
      name: 'Error',
      component: Error

    },
    
    // {
    //   path: '/catchAll(.*)',
    //   redirect: '/Home'
    // }
  ]
})

// router.beforeEach(() => {
  // redirect to home path
  // return '/'
// })
// router.beforeEach((to) => {
  // only redirect to 'Home'
  // if we're not already on it
  // if (to.name !== 'Home') {
    // return '/'
  // }
// })

export default router
