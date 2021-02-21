import { createApp } from 'vue'
// import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

import BaseCard from './components/base-components/base-card.vue'


const app = createApp(App)

// global components
app.component('base-card', BaseCard)

// mounting the app
app.mount('#app')
