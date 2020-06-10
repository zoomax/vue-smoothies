import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard.component'
import EditSmoothie from '@/components/EditSmoothie.component'
import AddSmoothie from '@/components/AddSmoothie.component'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/add-smoothie',
      name: 'AddSmoothie',
      component: AddSmoothie
    },
    {
      path: '/edit-smoothie/:id',
      name: 'EditSmoothie',
      component: EditSmoothie
    }
  ]
})
