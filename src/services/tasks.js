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

export {
  classify
}
