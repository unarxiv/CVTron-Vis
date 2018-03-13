import VueI18n from 'vue-i18n'
import Vue from 'vue'

Vue.use(VueI18n)

const messages = {
  en: enUS,
  zh: zhCN
}
  
export default new VueI18n({
  locale: 'en',
  messages 
})