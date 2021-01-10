import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import StudentList from '@/components/student/student-list'
import StudentAdd from '@/components/student/student-add'
import frame from "@/components/frame";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/student',
    component: frame,
    children: [
      {
        path: '/student/list',
        component: StudentList
      },
      {
        path: '/student/add',
        component: StudentAdd
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
