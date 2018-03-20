import axios from 'axios'

function classify (image) {
  return new Promise((resolve, reject) => {
    let payload = new FormData()
    payload.append('ufile', image)
    console.log(payload)
    axios.post('classifier/classify', payload).then(function (res) {
      resolve(res)
    })
  })
}

function detection (image) {
  return new Promise((resolve, reject) => {
    let payload = new FormData()
    
  })
}

function segmentation (image) {
  return new Promise((resolve, reject) => {

  })
}

function _inference_call (endpoint, image) {
  return ''
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
