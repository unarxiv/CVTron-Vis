<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-media :src=url :height=camSize>
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{name}}</h3>
            <div>{{desc}}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="primary">Full Screen</v-btn>
          <v-btn flat @click="resize('240px')" color="primary">Small</v-btn>
          <v-btn flat @click="resize('320px')" color="primary">Mid</v-btn>
          <v-btn flat @click="resize('480px')" color="primary">Large</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    camSize: '320px'
  }),
  props: ['url', 'name', 'desc'],
  methods: {
    pause () {

    },
    resume () {

    },
    resize (newSize) {
      this.camSize = newSize
    }
  }
}
</script>

<style>

</style>
