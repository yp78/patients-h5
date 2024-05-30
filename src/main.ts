import pinia from './stores'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import Vant from 'Vant'
import 'vant/lib/index.css'
import './styles/main.scss'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(Vant)

app.mount('#app')
