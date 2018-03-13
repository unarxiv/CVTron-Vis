<template>
<div>
  <v-expansion-panel>
    <v-expansion-panel-content>
      <div slot="header">{{ $t("settings.general.title") }}</div>
      <v-card>
        <v-layout row justify-center>
        <v-flex xs6>
        <v-text-field
          v-model="host"
          name="input-ipaddr"
          :label="$t('settings.general.ipaddr')"
          id="ip-addr"
        ></v-text-field>
        </v-flex>
        </v-layout>
        <v-layout row justify-center>
        <v-flex xs6>
        <v-text-field
          v-model="port"
          name="input-ipport"
          :label="$t('settings.general.port')"
          id="ip-port"
        ></v-text-field>
        </v-flex>
        </v-layout>
      </v-card>
    </v-expansion-panel-content>
    <v-expansion-panel-content>
      <div slot="header">{{ $t("settings.appearence.title") }}</div>
      <v-card>
        <v-layout row justify-center>
        <v-flex xs6>
        <v-select
          :items="items"
          v-model="language"
          label="Select"
          single-line
        ></v-select>
        </v-flex>
        </v-layout>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
  <v-btn color="info" @click="saveSettings">Save</v-btn>
  <v-btn color="Warning">Cancel</v-btn>
</div>
</template>

<script>
import { config } from '@/services/config'

export default {
  data () {
    return {
      items: [
        'English',
        '中文(简体)',
        'Deutschland'
      ],
      host: config.getHost(),
      port: config.getPort(),
      language: config.getLang()
    }
  },
  mounted () {
  },
  methods: {
    saveSettings () {
      config.setHost(this.host)
      config.setPort(this.port)
      config.setLang(this.language)
      config.save()
    }
  }
}
</script>

<style scoped>

</style>
