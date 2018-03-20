<template>
  <v-stepper v-model="current_step" vertical>
    <v-stepper-step step="1" :complete="current_step > 1">
      Choose a Task
      <small>You want classification, detection or segmentation?</small>
    </v-stepper-step>
    <v-stepper-content step="1">
      <v-layout row>
        <v-btn color="info" @click="choose_task_type('classification')">Classification</v-btn>
        <v-btn color="info" @click="choose_task_type('detection')">Detection</v-btn>
        <v-btn color="info" @click="choose_task_type('segmentation')">Segmentation</v-btn>
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
      <v-btn flat @click="step_back()">Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step step="3" :complete="current_step > 3">Test your Model
        <small>Use Web Based Tester to verify your model</small>
    </v-stepper-step>
    <v-stepper-content step="3">
        <Classification v-if="task_type==='classification'"></Classification>
        <Detection v-if="task_type==='detection'"></Detection>
        <Segmentation v-if="task_type==='segmentation'"></Segmentation>
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
export default {
  data () {
    return {
      filename: '',
      current_step: 1,
      formdata: '',
      result: [],
      task_type: '',
      model_type: ''
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
      this.model_type = modelType
      this.current_step = 3
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
