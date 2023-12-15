import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import router from "./router"

createApp(App)
    .use(router)
    .mount('#app')