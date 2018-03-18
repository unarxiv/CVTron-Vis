<template>
<div>
  <v-progress-linear value="10" height="20" color="info"></v-progress-linear>
  <v-expansion-panel>
      <v-expansion-panel-content>
      <div slot="header">{{$t("tasks.dashboard.log")}}</div>
      <v-card>
        <v-card-text><p>{{log}}</p></v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</div>
</template>

<script>
export default {
  data () {
    return {
      log: 'xxxxxx',
      progress: 10
    }
  },
  methods: {
    readRemoteLog () {
    }
  }
}
</script>

<style>

</style>
