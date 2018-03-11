import axios from 'axios'
import { BASE_URL } from './config'
import { getHardwareInfo } from './hardware'
import { classify } from './tasks'
axios.defaults.baseURL = BASE_URL

export {
  getHardwareInfo,
  classify
}
