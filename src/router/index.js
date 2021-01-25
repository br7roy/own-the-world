import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/cluster',
    component: Layout,
    redirect: '/cluster/balance',
    name: 'Cluster',
    meta: { title: '集群', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'balance',
        name: 'Balance',
        component: () => import('@/views/form/index'),
        meta: { title: '资源分配', icon: 'tree' }
      },
      {
        path: 'inspect',
        name: 'Inspect',
        component: () => import('@/views/tree/index'),
        meta: { title: '资源窥探', icon: 'table' }
      }
    ]
  },

  {
    path: '/bus',
    component: Layout,
    redirect: '/bus/flow1',
    name: 'Bus',
    meta: {
      title: '业务',
      icon: 'nested'
    },
    children: [
      {
        path: 'flow1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Flow1',
        meta: { title: '客流工具' },
        children: [
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: '商场客流' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'STEP.1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'STEP.2' }
              },
              {
                path: 'menu1-2-3',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-3',
                meta: { title: 'STEP.3(py)' }
              },
              {
                path: 'menu1-2-4',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-4',
                meta: { title: '月任务' }
              }
            ]
          },
          {
            path: 'menu2-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu2-2',
            meta: { title: '待编辑' }
          }
        ]
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    name: 'Link',
    meta: {
      title: '链接',
      icon: 'tree'
    },
    children: [
      {
        path: 'http://bd15-21-33-61:10880/cluster',
        meta: { title: '26YARN', icon: 'link' }
      },
      {
        path: 'http://10.21.131.11:9800',
        meta: { title: 'ElasticHD', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
