<template>
  <v-card>
           <v-btn v-model="filename"
                  @click.native="onFocus"
                  ref="fileTextField">UPLOAD</v-btn>
      <br>
      <input type="file" ref="fileInput" v-on:change="onFileChange">
      <img id="input_image" alt="Waiting" class="upload_classify_image"/>
      <img id="output_image" alt="Waiting" class="upload_classify_image"/>
  </v-card>
</template>

<script>
import { segment } from '@/services'
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
      let file = e.target.files[0]
      if (window.FileReader) {
        var reader = new FileReader()
        reader.onload = (function (theFile) {
          return function (e) {
            document.getElementById('input_image').setAttribute('src', e.target.result)
            document.getElementById('output_image').setAttribute('src', e.target.result)
          }
        })(file)
        reader.readAsDataURL(file)
      }
      segment(file).then(function (res) {
        console.log(res)
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
    max-width: 50%;
  }
</style>
