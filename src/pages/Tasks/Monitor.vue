<template>
<div>
     <v-subheader>开始于XX的分割任务</v-subheader>
  <Train></Train>
</div>
</template>

<script>
import Train from '@/components/Tasks/Train'
export default {
  data () {
    return {
      tasks: []
    }
  },
  components: {
    Train
  }
}
</script>

<style>

</style>
