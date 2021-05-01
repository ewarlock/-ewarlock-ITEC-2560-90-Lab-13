import { createApp } from 'vue'
import App from './App.vue'

import StateAPIService from '@/services/stateService'

//imports index.js - index will be imported when dir imported
import router from '@/router'

let app = createApp(App)

app.config.globalProperties.$stateService = StateAPIService

app.use(router)

app.mount('#app')
