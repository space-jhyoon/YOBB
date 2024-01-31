import { createRouter, createWebHistory } from 'vue-router'
import YOBBMainPage from "@/views/YOBBMainPage.vue";
import UserProfile from "@/components/User/UserProfile.vue";


const routes = [
  { path: '/YOBB',component: YOBBMainPage },
  { path: '/YOBB/:id', component: UserProfile },
  // {
  //   path: '/YOBB/:id',
  //   name: 'jihyun',
  //   component: () => import('../components/User/UserProfile.vue'),
  //   props: true
  // },
  // {
  //   path: '/YOBB/:id',
  //   name: 'sunghyun',
  //   component: () => import('../components/User/UserProfile.vue'),
  // },
  // {
  //   path: '/YOBB/:id',
  //   name: 'yubin',
  //   component: () => import('../components/User/UserProfile.vue'),
  // },
  // {
  //   path: '/YOBB/:id',
  //   name: 'jihun',
  //   component: () => import('../components/User/UserProfile.vue'),
  // },
  // {
  //   path: '/YOBB/:id',
  //   name: 'jinhyun',
  //   component: () => import('../components/User/UserProfile.vue'),
  // },
  // {
  //   path: '/YOBB/:id',
  //   name: 'sejun',
  //   component: () => import('../components/User/UserProfile.vue'),
  // },
  // {
  //   path: '/YOBB/:id',
  //   name: 'jeongin',
  //   component: () => import('../components/User/UserProfile.vue'),
  // },
  // {
  //   path: '/YOBB/:id',
  //   name: 'useong',
  //   component: () => import('../components/User/UserProfile.vue'),
  // },
  // {
  //   path: '/YOBB/:id',
  //   name: 'ingyeom',
  //   component: () => import('../components/User/UserProfile.vue'),
  // },
  // {
  //   path: '/YOBB/:id',
  //   name: 'yeongmok',
  //   component: () => import('../components/User/UserProfile.vue'),
  // },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
