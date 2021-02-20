import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import TheDashboard from './components/UI/TheDashboard.vue'
import BaseCard from './components/base-components/base-card.vue'

const router = createRouter({
  routes: [
    { path: '/', component: TheDashboard },
  ],
  history: createWebHistory()
})


const app = createApp(App)

// global components
app.component('base-card', BaseCard)

app.use(router)

app.mount('#app')
