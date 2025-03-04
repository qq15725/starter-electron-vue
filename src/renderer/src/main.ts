import type { Plugin } from 'vue'
import { createApp } from 'vue'

import App from './App.vue'
import './assets/css/main.css'

const app = createApp(App)

Object.values(import.meta.glob<Plugin>('./plugins/*.ts', { eager: true, import: 'default' }))
  .forEach(v => app.use(v))

app.mount('#app')
