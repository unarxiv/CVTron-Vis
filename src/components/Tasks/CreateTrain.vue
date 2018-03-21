<template>
  <v-card>
           <v-btn v-model="filename"
                  @click.native="onFocus"
                  ref="fileTextField">UPLOAD</v-btn>
      <br>
      <input type="file" ref="fileInput" v-on:change="onFileChange">
      <v-data-table
        :headers="headers"
        :items="result"
        hide-actions
        class="elevation-1"
      >
      <template slot="items" slot-scope="props">
      <td class="text-xs-left">{{ props.item.name }}</td>
      <td id="upload_file_name"></td>
    </template>
      </v-data-table>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        {
          text: 'Filename',
          align: 'left',
          sortable: true,
          value: 'name'
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
      let uplaodPath = null
      if (window.FileReader) {
        var reader = new FileReader()
        reader.onload = (function (theFile) {
          return function (e) {
            document.getElementById('upload_file_name').setV
          }
        })(file)
        reader.readAsDataURL(file)
      }
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
