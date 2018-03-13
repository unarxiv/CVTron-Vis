<template>
  <v-card>
        <v-toolbar dark>
          <v-toolbar-title>Device Information</v-toolbar-title>
        </v-toolbar>
        <v-list two-line>
          <template v-for="(item, index) in items">
            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
            <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
            <v-list-tile avatar v-else :key="item.title">
              <v-list-tile-avatar>
                {{ item.avatar }}
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
</template>

<script>
import { getHardwareInfo } from '@/services'
export default {
  data: () => ({
    items: []
  }),
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      let self = this
      getHardwareInfo().then(function (res) {
        res = res.data.result
        self.items = [
          {
            'avatar': 'CPU',
            'title': res.cpu[0].model_name,
            'subtitle': res.cpu[0].model_name + ' * ' + res.cpu.length + ' Cores'
          },
          {
            'avatar': 'GPU',
            'title': res.gpu[0].gpu_name,
            'subtitle': res.gpu[0].memTotal + 'MB Memory'
          },
          {
            'avatar': 'MEM',
            'title': res.mem,
            'subtitle': res.mem
          }
        ]
      }).then(function (err) {
        console.log(err)
      })
    }
  },
  mounted () {

  }
}
</script>

<style scoped>

</style>
