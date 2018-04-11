<template>
  <v-container>
      <v-layout row wrap>
        <v-flex
            v-for="(item, index) in cameras"
            :key="index"
            >
            <camera
            :url="item.url"
            :name="item.name"
            :desc="item.desc"
            ></camera>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
import Camera from '@/components/Camera'
export default {
  data: () => ({
    cameras: [
      {
        url: 'http://192.168.1.19:12399/cam',
        name: 'CAM-01',
        desc: 'Zhongshan Park Cam-01'
      }
    ]
  }),
  components: {
    Camera
  }
}
</script>

<style>

</style>
