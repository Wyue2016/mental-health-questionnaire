import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import en from './locales/en.json'
import cn from './locales/cn.json'
import App from './App.vue'

const messages = {
  en,
  cn
}

const i18n = createI18n({
  legacy: false,
  locale: 'cn',
  messages,
})

const app = createApp(App);
app.use(i18n);
app.use(ElementPlus);
app.mount('#app');

