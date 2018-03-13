<template>
  <v-stepper v-model="current_step" vertical>
    <v-stepper-step step="1" :complete="current_step > 1">
      Choose a Task
      <small>You want detection, classification or segmentation?</small>
    </v-stepper-step>
    <v-stepper-content step="1">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click.native="current_step = 2">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step step="2" :complete="current_step > 2">Select a Model
        <small>Use existed models or create your own</small></v-stepper-step>
    <v-stepper-content step="2">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click.native="current_step = 3">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step step="3" :complete="current_step > 3">Test your Model
        <small>Use Web Based Tester to verify your model</small>
    </v-stepper-step>
    <v-stepper-content step="3">
        <Classification></Classification>
      <v-btn color="primary" @click.native="current_step = 4">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>
    <v-stepper-step step="4">Build Endpoint
        <small>View your endpoint for usage of current model</small>
    </v-stepper-step>
    <v-stepper-content step="4">
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
      <v-btn color="primary" @click.native="current_step = 1">Continue</v-btn>
      <v-btn flat>Cancel</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
import Classification from '@/components/Tasks/Classification'
export default {
  data () {
    return {
      filename: '',
      current_step: 1,
      formdata: '',
      result: []
    }
  },
  components: {
    Classification
  },
  mounted () {
  },
  methods: {

  }
}
</script>

<style>

</style>
