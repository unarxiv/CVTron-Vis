<template>
  <v-card>
          <v-btn v-model="filename"
                  @click.native="onFocus"
                  ref="fileTextField">UPLOAD</v-btn>
      <br>
      <input type="file" ref="fileInput" v-on:change="onFileChange">
      <img id="input_detection_image" src='#'/>
  </v-card>
</template>

<script>
import { classify } from '@/services'
export default {
  data () {
    return {
      filename: '',
      formdata: '',
      result: []
    }
  },
  mounted () {
  },
  methods: {
    onFocus () {
      if (!this.disabled) {
        this.$refs.fileInput.click()
      }
    },
    labelTarget (pic) {
    },
    onFileChange (e) {
      let self = this
      let file = e.target.files[0]
      if (window.FileReader) {
        var reader = new FileReader()
        reader.onload = (function (theFile) {
          return function (e) {
            document.getElementById('input_detection_image').setAttribute('src', e.target.result)
          }
        })(file)
        reader.readAsDataURL(file)
      }
      classify(file).then(function (res) {
        self.result = res.data.result
        console.log(self.result)
      })
    }
  }
}
</script>

<style scoped>
  input[type=file] {
    position: absolute;
    left: -99999px;
  }
</style>
