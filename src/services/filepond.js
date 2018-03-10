import * as FilePond from 'filepond'
import { BASE_URL } from './config'

FilePond.setOptions({
  server: {
    url: BASE_URL + '/classify'
  }
})

const classificationPond = FilePond.create({
  multiple: true,
  name: 'classification'
})

export {
  classificationPond
}
