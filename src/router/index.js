import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hardware from '@/pages/Hardware'
import Settings from '@/pages/Settings'
import List from '@/pages/Tasks/List'
import NewTask from '@/pages/Tasks/NewTask'
import Monitor from '@/pages/Tasks/Monitor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/hardware',
      name: 'Hardware',
      component: Hardware
    }, {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }, {
      path: '/tasks',
      name: 'List',
      component: List
    }, {
      path: '/tasks/create',
      name: 'newTask',
      component: NewTask
    }, {
      path: '/tasks/board',
      name: 'task_dashboard',
      component: Monitor
    }
  ]
})
