import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router/index.ts'
import axios from 'axios';

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.config.globalProperties.$axios = axios

app.mount('#app')