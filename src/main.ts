import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import moment from 'moment'
import router from './router'
import App from './App.vue'
import '@/styles/index.scss'
import apiHandler from './api/apiHandler'
import functionUtil from './util/functionUtil'

// 全域引用
window.moment = moment
window.api = apiHandler
window.utils = functionUtil
// 全域類型
declare global {
  interface Window {
    moment: typeof moment
    api: typeof apiHandler
    utils: typeof functionUtil
  }
}

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
