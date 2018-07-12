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

function upload (endpoint, dataset) {
  return new Promise((resolve, reject) => {
    let payload = new FormData()
    payload.append('ufile', dataset)
    axios.post(endpoint, payload).then(function (res) {
      resolve(res)
    }).catch(function (err) {
      reject(err)
    })
  })
}

function classify (image) {
  return _inferenceCall('classifier/classify', image)
}

function detect (modelName, image) {
  return _inferenceCall('detector/detect?model_name=' + modelName, image)
}

function segment (image) {
  return _inferenceCall('segmentor/segment', image)
}

function getLog (logfilename) {
  console.log('getting remote log')
  console.log('static/' + logfilename)
  return _getRequest('static/' + logfilename)
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

function getModels () {
  return _getRequest('static/models.json')
}

export {
  classify,
  getLog,
  upload,
  segment,
  detect,
  getInferConfig,
  getTrainConfig,
  getNodeStatus,
  startTrain,
  getModels,
  getTaskList
}
