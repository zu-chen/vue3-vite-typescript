import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import moment from 'moment'
import App from './App.vue'

// 全域引用
window.moment = moment

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
