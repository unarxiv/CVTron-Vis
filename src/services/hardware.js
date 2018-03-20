import axios from 'axios'

function getHardwareInfo () {
  return new Promise((resolve, reject) => {
    axios.get('resource/device').then(function (result) {
      resolve(result)
    })
  })
}

export {
  getHardwareInfo
}
