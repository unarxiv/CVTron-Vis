import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hardware from '@/pages/Hardware'
import Settings from '@/pages/Settings'
import Jobs from '@/pages/Tasks/Jobs'
import NewTask from '@/pages/Tasks/NewTask'

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
      path: '/jobs',
      name: 'Jobs',
      component: Jobs
    }, {
      path: '/task/create',
      name: 'newTask',
      component: NewTask
    }
  ]
})
