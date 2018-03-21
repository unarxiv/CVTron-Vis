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

function _getRequest (endpoint) {
  return new Promise((resolve, reject) => {
    axios.get(endpoint).then(function (res) {
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
  return _getRequest('static/log')
}

function getTrainConfig () {
  return _getRequest('segmentor/get_train_config')
}

function getNodeStatus () {
  return _getRequest('resource/status')
}

export {
  classify,
  getLog,
  segment,
  detect,
  getTrainConfig,
  getNodeStatus
}
