import * as FilePond from 'filepond'

const classificationPond = FilePond.create({
    multiple: true,
    name: 'classification'
})

export {
    classificationPond
}