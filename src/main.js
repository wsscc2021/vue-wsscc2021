import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App).use(router)

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
app.component('Header', Header)
app.component('Footer', Footer)
app.mount('#app')
