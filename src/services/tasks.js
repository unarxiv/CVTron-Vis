import axios from 'axios'

function classify (image) {
  return new Promise((resolve, reject) => {
    let payload = new FormData()
    payload.append('ufile', image)
    console.log(payload)
    axios.post('classify', payload).then(function (res) {
      resolve(res)
    })
  })
}

function getLog (logfilename) {
  return new Promise((resolve, reject) => {
    axios.get('static/log/' + logfilename).then(function (res) {
      resolve(res)
    })
  })
}

export {
  classify,
  getLog
}
