<template>
<div>
  <v-progress-linear value="10" height="20" color="info"></v-progress-linear>
  <v-expansion-panel>
    <v-expansion-panel-content>
    <div slot="header">{{$t("tasks.dashboard.config")}}</div>
    </v-expansion-panel-content>
      <v-expansion-panel-content>
      <div slot="header">{{$t("tasks.dashboard.log")}}</div>
      <v-card>
        <v-layout right>
        <v-btn flat small color="primary" @click="changeType('plain')">Plain</v-btn>
        <v-btn flat small color="primary" @click="changeType('table')">Table</v-btn>
        <v-btn flat small color="primary" @click="changeType('chart')">Chart</v-btn>
        </v-layout>
        <v-card-text>
          <p v-if="type==='plain'">{{ log }}</p>
          <v-data-table
            :headers="headers"
            :items="steps"
            hide-actions
            v-if="type==='table'"
          >
            <template slot="items" slot-scope="props">
              <td class="text-xs-right" v-for="(each, index) in headers" :key="index">
                {{ props.item[each.text] }}
              </td>
            </template>
          </v-data-table>
          <v-layout row justify-center>
            <v-layout>
              <v-flex xs3>
           <v-btn flat small color="primary" v-if="type==='chart'" v-for="(each, index) in headers" :key="index" @click="changeChartData(each.text)">
             {{ each.text }}
           </v-btn>
              </v-flex>
            </v-layout>
           <LineChart
            v-if="type==='chart'"
            :chartData="chartData"
            :options="{responsive: false, maintainAspectRatio: false}"
          >
          </LineChart>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</div>
</template>

<script>
import { getLog } from '@/services'
import LineChart from '@/components/Charts/LineChart'
export default {
  data () {
    return {
      steps: [],
      log: '',
      progress: 10,
      type: 'plain',
      chartData: {}
    }
  },
  computed: {
    headers () {
      if (this.steps[0]) {
        let keys = Object.keys(this.steps[0])
        let heads = []
        for (let i in keys) {
          heads.push(
            {
              text: keys[i],
              value: keys[i],
              align: 'right',
              sortable: true
            }
          )
        }
        return heads
      }
    }
  },
  created () {
    this.readRemoteLog()
  },
  methods: {
    fillData (name) {
      console.log(name)
      let data = []
      for (let i in this.steps) {
        data.push(this.steps[i][name])
      }
      this.chartData = {
        datasets: [
          {
            label: name,
            backgroundColor: '#2196F3',
            data: data
          }
        ]
      }
    },
    changeType (selectedType) {
      this.type = selectedType
      if (selectedType === 'chart') {
        this.fillData(this.headers[0].value)
      }
    },
    changeChartData (key) {
      this.fillData(key)
    },
    readRemoteLog () {
      let self = this
      getLog('log.json').then(function (res) {
        self.log = JSON.stringify(res.data)
        self.steps = res.data
      })
    }
  },
  components: {
    LineChart
  }
}
</script>

<style>

</style>
