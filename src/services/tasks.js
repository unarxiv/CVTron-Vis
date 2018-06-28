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

function _postRequest (endpoint, data) {
  return new Promise((resolve, reject) => {
    axios.post(endpoint, data).then(function (res) {
      resolve(res)
    }).catch(function (error) {
      reject(error)
    })
  })
}

function classify (image) {
  return _inferenceCall('classifier/classify', image)
}

function detect (modelName,image) {
  return _inferenceCall('detector/detect?model_name=' + modelName, image)
}

function segment (image) {
  return _inferenceCall('segmentor/segment', image)
}

function getLog (logfilename) {
  return _getRequest('static/log/' + logfilename)
}

function getTrainConfig (taskType) {
  return _getRequest(taskType + '/get_train_config')
}

function getNodeStatus () {
  return _getRequest('resource/status')
}

function startTrain (taskType, config) {
  return _postRequest(taskType + '/start_train', config)
}

function getInferConfig (taskType) {
  return _getRequest(taskType + '/get_infer_config')
}

function getTaskList () {
  return _getRequest('resource/tasks')
}

export {
  classify,
  getLog,
  segment,
  detect,
  getInferConfig,
  getTrainConfig,
  getNodeStatus,
  startTrain,
  getTaskList
}
