<template>
  <v-card>
           <v-btn v-model="filename"
                  @click.native="onFocus"
                  ref="fileTextField">UPLOAD</v-btn>
      <br>
      <input type="file" ref="fileInput" v-on:change="onFileChange">
      <img id="input_image" alt="Waiting" class="upload_classify_image"/>
      <img id="output_image" alt="Waiting" class="segmented_image"/>
  </v-card>
</template>

<script>
import { classify } from '@/services'
export default {
  data () {
    return {
      headers: [
        {
          text: 'Result',
          align: 'left',
          sortable: true,
          value: 'type'
        }, {
          text: 'Confidence',
          align: 'left',
          sortable: true,
          value: 'prob'
        }
      ],
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
    onFileChange (e) {
      let self = this
      let file = e.target.files[0]
      if (window.FileReader) {
        var reader = new FileReader()
        reader.onload = (function (theFile) {
          return function (e) {
            document.getElementById('input_image').setAttribute('src', e.target.result)
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
  .upload_classify_image {
    max-width: 100%;
  }
</style>
