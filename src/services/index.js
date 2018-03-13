import axios from 'axios'
import { config } from './config'
import { getHardwareInfo } from './hardware'
import { classify } from './tasks'
axios.defaults.baseURL = config.getHostString()

export {
  getHardwareInfo,
  classify
}
