import DashCreate from '@/views/DashCreate.vue'
import DashList from '@/views/DashList.vue'
import Dash from '@/views/Dash.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/dashboard",
      component: Dash,
      children: [
        {
          path: "",
          component: DashCreate
        },
        {
          path: "new",
          component: DashList
        },
        {
          path: "inprogress",
          component: DashList
        },
        {
          path: "done",
          component: DashList
        },
        {
          path: "cancelled",
          component: DashList
        }
      ]
    }
  ]
})

export default router
