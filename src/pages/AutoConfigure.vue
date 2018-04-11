<template>
<p> Configure Loaded </p>
</template>

<script>
import { config } from '@/services/config'
export default {
  mounted () {
    let ip = this.getQueryString('ip')
    let port = this.getQueryString('port')
    console.log(ip)
    console.log(port)
    config.setHost('http://' + ip)
    config.setPort(port)
    config.save()
    this.$router.push({
      path: '/'
    })
  },
  methods: {
    getQueryString (name) {
      let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
      let r = ('?' + window.location.hash.split('?')[1]).substr(1).match(reg)
      if (r != null) return unescape(r[2])
      return null
    }
  }
}
</script>

<style>

</style>
