import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@components/Home.vue'
import StudentList from '@/components/student/student-list'
import StudentAdd from '@/components/student/student-add'
import frame from "@/components/frame";
import Flow from "@components/flow";
import Cluster from "@components/Cluster";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/flow_tool',
        component: Flow
      },
      {
        path: '/balance',
        component: Cluster
      }
    ]

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
