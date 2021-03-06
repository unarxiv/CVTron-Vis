import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')
    }, {
      path: '/hardware',
      name: 'Hardware',
      component: () => import('@/pages/Hardware')
    }, {
      path: '/settings',
      name: 'Settings',
      component: () => import('@/pages/Settings')
    }, {
      path: '/tasks',
      name: 'List',
      component: () => import('@/pages/Tasks/List')
    }, {
      path: '/tasks/create',
      name: 'newTask',
      component: () => import('@/pages/Tasks/NewTask')
    }, {
      path: '/tasks/train',
      name: 'newTrainTask',
      component: () => import('@/pages/Tasks/NewTrainTask')
    }, {
      path: '/tasks/board',
      name: 'task_dashboard',
      component: () => import('@/pages/Tasks/Monitor')
    }, {
      path: '/enterprise/autoconfig',
      name: 'AutoConfigure',
      component: () => import('@/pages/AutoConfigure')
    },
    {
      path: '/camera',
      name: 'Camera',
      component: () => import('@/pages/Cameras')
    }, {
      path: '/tasks/list',
      name: 'TasksList',
      component: () => import('@/pages/TasksList')
    }
  ]
})
