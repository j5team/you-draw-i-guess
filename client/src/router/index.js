import Vue from 'vue'
import Router from 'vue-router'
import room from '@/components/room'
import begin from '@/components/begin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'room',
      component: room
    },
    {
      path: '/game',
      name: 'begin',
      component: begin
    }
  ]
})
