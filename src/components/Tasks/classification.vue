<template>
  <v-card>
          <v-text-field prepend-icon="attach_file" single-line
                  v-model="filename" label="UPLOAD"
                  @click.native="onFocus"
                  ref="fileTextField"></v-text-field>
      <input type="file" ref="fileInput" v-on:change="onFileChange">
      <img id="input_image" src='#'/>
      <v-data-table
        :headers="headers"
        :items="result"
        hide-actions
        class="elevation-1"
      >
      <template slot="items" slot-scope="props">
      <td class="text-xs-left">{{ props.item.type }}</td>
      <td class="text-xs-left">{{ props.item.prob }}</td>
    </template>
      </v-data-table>
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
</style>
