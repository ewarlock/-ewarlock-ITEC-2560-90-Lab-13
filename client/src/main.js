import { createApp } from 'vue'
import App from './App.vue'

import StateAPIService from '@/services/stateService'

//imports index.js - index will be imported when dir imported
import router from '@/router'

//importing things here applies to all of our app
import 'leaflet/dist/leaflet.css'

let app = createApp(App)

app.config.globalProperties.$stateService = StateAPIService

app.use(router)

app.mount('#app')
