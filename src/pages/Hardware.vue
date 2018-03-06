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
                <avatar :username=item.title></avatar>
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
import Avatar from '@/components/Avatar'
export default {
  data: () => ({
      items:[]
  }),
  components: {
    Avatar
  },
  mounted() {
      this.items = [
          {
              'title':'CPU',
              'subtitle':'A useless CPU'
          },
          {
              'title':'GPU',
              'subtitle':'NVIDIA Geforce 1070',
          }
      ]
  }
}
</script>

<style scoped>

</style>

