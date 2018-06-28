<template>
  <v-container>
      <v-layout row wrap>
        <v-data-table
            :headers="headers"
            :items="tasks"
            hide-actions
            class="elevation-1"
        >
            <template slot="items" slot-scope="props">
            <td>{{ props.item.id }}</td>
            <td class="text-xs-center">{{ props.item.pid }}</td>
            <td class="text-xs-center">{{ props.item.type }}</td>
            <td class="text-xs-center">{{ props.item.logFile }}</td>
            <td class="text-xs-center">{{ props.item.modelFile }}</td>
            <td class="text-xs-center">{{ props.item.status }}</td>
            <td class="text-xs-center">
                <v-icon>play_arrow</v-icon>
                <v-icon>pause</v-icon>
            </td>
            </template>
        </v-data-table>        
      </v-layout>
  </v-container>
</template>

<script>
import { getTaskList } from '@/services'
export default {
  data () {
      return {
        headers: [
          {
            text: 'ID',
            align: 'center',
            sortable: true,
            value: 'id'
          },
          { text: 'PID', value: 'pid', align: 'left'},
          { text: 'Type', value: 'type',align: 'left'},
          { text: 'LogFile', value: 'logFile', align: 'left' },
          { text: 'ModelFile', value: 'modelFile',align: 'left'},
          { text: 'Status', value: 'status',align: 'left'},
          { text: 'Operation'}
        ],
        tasks: []
      }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      let self = this
      getTaskList().then(function (res) {
        res = res.data
        self.tasks = res
        console.log(res)
      }).then(function (err) {
        console.log(err)
      })
    }
  },

}
</script>

<style>

</style>
