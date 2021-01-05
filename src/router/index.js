import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import opts from '@/components/Opts'
import Home from '@/components/Home';
import demo from "@/components/Demo";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/opts',
      name: 'Opts',
      component: opts
    },
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    }

  ]
})
