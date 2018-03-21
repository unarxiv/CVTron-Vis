import axios from 'axios'

function _inferenceCall (endpoint, image) {
  return new Promise((resolve, reject) => {
    let payload = new FormData()
    payload.append('ufile', image)
    axios.post(endpoint, payload).then(function (res) {
      resolve(res)
    })
  })
}

function classify (image) {
  return _inferenceCall('classifier/classify', image)
}

function detect (image) {
  return _inferenceCall('detector/detect', image)
}

function segment (image) {
  return _inferenceCall('segmentor/segment', image)
}

function getLog (logfilename) {
  return new Promise((resolve, reject) => {
    axios.get('static/log/' + logfilename).then(function (res) {
      resolve(res)
    })
  })
}

function getTrainConfig () {
  return new Promise((resolve, reject) => {
    axios.get('segmentor/get_train_config').then(function (res) {
      resolve(res)
    })
  })
}

export {
  classify,
  getLog,
  segment,
  detect,
  getTrainConfig
}
