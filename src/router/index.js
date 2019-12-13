import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import Dashboard from "../pages/Dashboard.vue";
import Workflow from "../pages/Workflow";

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: 'workflow',
          name: 'workflow',
          component: Workflow
        }
      ]
    },

  ]
})
