<template>
  <v-card>
          <v-btn v-model="filename"
                  @click.native="onFocus"
                  ref="fileTextField">UPLOAD</v-btn>
      <br>
      <input type="file" ref="fileInput" v-on:change="onFileChange">
      <canvas id="output"></canvas>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      filename: '',
      formdata: '',
      result: [
        {
          'x_min': 77.5373477935791,
          'x_max': 376.87816429138184,
          'y_min': 66.69588661193848,
          'y_max': 387.60104179382324,
          'class_name': 'tiger'
        }
      ]
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
    labelTarget () {
      let c = document.getElementById('output')
      if (c == null) {
        return false
      }
      let ctx = c.getContext('2d')
      ctx.strokeStyle = 'red'
      for (let index in this.result) {
        let xmin = this.result[index]['x_min']
        let xmax = this.result[index]['x_max']
        let ymin = this.result[index]['y_min']
        let ymax = this.result[index]['y_max']
        let width = xmax - xmin
        let height = ymax - ymin
        setTimeout(function () {
          ctx.strokeRect(xmin, ymax, width, height)
        }, 200)
      }
    },
    onFileChange (e) {
      let file = e.target.files[0]
      if (window.FileReader) {
        var reader = new FileReader()
        reader.onload = (function (theFile) {
          return function (e) {
            let c = document.getElementById('output')
            let img = new Image()
            img.onload = function () {
              c.setAttribute('width', this.width)
              c.setAttribute('height', this.height)
              c.getContext('2d').drawImage(img, 0, 0, this.width, this.height)
            }
            img.src = e.target.result
          }
        })(file)
        reader.readAsDataURL(file)
      }
      this.labelTarget()
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
