<template>
<div>
  <v-expansion-panel>
    <v-expansion-panel-content>
      <div slot="header">General</div>
      <v-card>
        <v-layout row justify-center>
        <v-flex xs6>
        <v-text-field
          name="input-ipaddr"
          label="IP Address"
          id="ip-addr"
        ></v-text-field>
        </v-flex>
        </v-layout>
        <v-layout row justify-center>
        <v-flex xs6>
        <v-text-field
          name="input-ipport"
          label="Port"
          id="ip-port"
        ></v-text-field>
        </v-flex>
        </v-layout>
      </v-card>
    </v-expansion-panel-content>
    <v-expansion-panel-content>
      <div slot="header">Appearence</div>
      <v-card>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
  <v-btn color="info">Save</v-btn>
  <v-btn color="Warning">Cancel</v-btn>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
