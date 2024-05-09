import { createApp, markRaw } from 'vue'
import './style.css'
import "@/sass/index.scss"
import './styles/tailwind.css'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from './router'

import { VueQueryPlugin } from 'vue-query'

const app = createApp(App)

const pinia = createPinia()
pinia.use(({store}) => {
    store.$router = markRaw(router)
});
app.use(pinia)

app.use(router)

app.use(VueQueryPlugin);

app.mount('#app')
