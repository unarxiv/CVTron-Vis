import axios from 'axios'

function getHardwareInfo () {
  return new Promise((resolve, reject) => {
    axios.get('device').then(function (result) {
      resolve(result)
    })
  })
}

export {
  getHardwareInfo
}
