import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import Dashboard from "../pages/Dashboard.vue";
import Workflow from "../pages/Workflow";
import Logs from "../pages/Logs";
import List from "../pages/List";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          name: 'home',
          component: Dashboard
        },
        {
          path: 'dashboard',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: 'workflow',
          name: 'workflow',
          component: Workflow
        },
        {
          path: 'logs',
          name: 'logs',
          component: Logs
        },
        {
          path: 'list',
          name: 'logs',
          component: List
        }
      ]
    },

  ]
})
