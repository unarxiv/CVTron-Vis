import axios from 'axios'
import i18n from '@/i18n'
import map from '@/i18n/map'

class Configure {
  // Configure Class
  // It should be Singleton
  constructor () {
    this.BASE_URL = 'http://192.168.1.4'
    this.PORT = '9090'
    this.LANG = 'English'
  }
  getInstance () {
    return this
  }
  setHost (host) {
    this.BASE_URL = host
  }
  getHost () {
    return this.BASE_URL
  }
  getHostString () {
    return this.BASE_URL + ':' + this.PORT
  }
  setPort (port) {
    this.PORT = port
  }
  getPort () {
    return this.PORT
  }
  getLang () {
    return this.LANG
  }
  setLang (lang) {
    this.LANG = lang
  }
  toJSON () {
    let configJson = {
      'BASE_URL': this.BASE_URL,
      'PORT': this.PORT,
      'LANG': this.LANG
    }
    return JSON.stringify(configJson)
  }
  fromJSON (json) {
    this.BASE_URL = json.BASE_URL
    this.PORT = json.PORT
    this.LANG = json.LANG
  }
  save () {
    console.log('[cvtron]: save config to localstorage')
    localStorage.setItem('cvtron-config', this.toJSON())
  }
  load () {
    console.info('[cvtron]: load config from localstorage')
    let cvtronConfig = localStorage.getItem('cvtron-config')
    if (cvtronConfig) {
      this.fromJSON(JSON.parse(cvtronConfig))
    }
    axios.defaults.baseURL = config.getHostString()
    i18n.locale = map[config.getLang()]
  }
}

let config = new Configure()
config.load()

export {
  config
}
