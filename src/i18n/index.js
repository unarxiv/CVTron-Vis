import VueI18n from 'vue-i18n'
import Vue from 'vue'
import enUS from './en-US.json'
import zhCN from './zh-CN.json'
import deGE from './de-GE.json'

Vue.use(VueI18n)

const messages = {
  en: enUS,
  zh: zhCN,
  de: deGE
}

export default new VueI18n({
  locale: 'en',
  messages
})
