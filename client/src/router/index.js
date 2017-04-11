import Vue from 'vue'
import Router from 'vue-router'
import room from '@/components/room'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'room',
      component: room
    }
  ]
})
