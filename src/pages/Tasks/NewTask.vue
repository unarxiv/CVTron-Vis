<template>
  <v-stepper v-model="current_step" vertical>
    <v-stepper-step step="1" :complete="current_step > 1">
      Choose a Task
      <small>You want classification, detection or segmentation?</small>
    </v-stepper-step>
    <v-stepper-content step="1">
      <v-layout row>
        <v-btn color="info" @click="choose_task_type('classifier')">Classification</v-btn>
        <v-btn color="info" @click="choose_task_type('detector')">Detection</v-btn>
        <v-btn color="info" @click="choose_task_type('segmentor')">Segmentation</v-btn>
      </v-layout>
    </v-stepper-content>
    <v-stepper-step step="2" :complete="current_step > 2">Select a Model
        <small>Use existed models or create your own</small></v-stepper-step>
    <v-stepper-content step="2">
      <v-layout row>
      <v-btn color="info" @click="choose_model_type('predefined')">Pre-Defined</v-btn>
      <v-btn color="info" @click="choose_model_type('upload')">Upload</v-btn>
      <a href="" class="upload_guide">Upload Guidelines</a>
      </v-layout>
      <v-layout row v-for="(key, value) in config" :key="value">
      <v-flex xs4>
        <v-subheader>{{ value }}</v-subheader>
      </v-flex>
      <v-flex xs8>
        <v-text-field
          name="input-1"
          :label=value
          :id=value
          v-model=config[value]
        ></v-text-field>
      </v-flex>
      </v-layout>
      <v-btn v-if="step_3_continue_visibility" color="info" @click="step_forward()">Continue</v-btn>
      <v-btn flat @click="step_back()">Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step step="3" :complete="current_step > 3">Test your Model
        <small>Use Web Based Tester to verify your model</small>
    </v-stepper-step>
    <v-stepper-content step="3">
        <Classification v-if="task_type==='classifier'"></Classification>
        <Detection v-if="task_type==='detector'" :model_name='model_name'></Detection>
        <Segmentation v-if="task_type==='segmentor'"></Segmentation>
      <v-btn color="primary" @click.native="current_step = 4">Continue</v-btn>
      <v-btn flat @click="step_back()">Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step step="4">Build Endpoint
        <small>View your endpoint for usage of current model</small>
    </v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click.native="current_step = 1">Continue</v-btn>
      <v-btn flat @click="step_back()">Cancel</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
import Classification from '@/components/Tasks/Classification'
import Detection from '@/components/Tasks/Detection'
import Segmentation from '@/components/Tasks/Segmentation'

import { getInferConfig } from '@/services'

export default {
  data () {
    return {
      filename: '',
      current_step: 1,
      formdata: '',
      result: [],
      task_type: '',
      model_type: '',
      model_name: '',
      config: {},
      step_3_continue_visibility: false
    }
  },
  components: {
    Classification,
    Detection,
    Segmentation
  },
  mounted () {
  },
  methods: {
    choose_task_type (taskName) {
      this.task_type = taskName
      this.current_step = 2
    },
    choose_model_type (modelType) {
      let self = this
      this.model_type = modelType
      if (this.model_type === 'upload') {
        getInferConfig(this.task_type).then(function (res) {
          self.config = res.data
          self.step_3_continue_visibility = true
        })
      } else {
        this.model_type = modelType
        this.current_step = 3
      }
    },
    step_forward () {
      this.model_name = this.config.model_name
      console.log(this.config.model_name)
      if (this.current_step <= 4) {
        this.current_step += 1
      }
    },
    step_back () {
      if (this.current_step >= 1) {
        this.current_step -= 1
      }
    }
  }
}
</script>

<style scoped>
.upload_guide {
  margin-top: auto;
  margin-bottom: auto;
}
</style>
