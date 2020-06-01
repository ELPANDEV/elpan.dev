<template>
  <v-body>
    <template slot="sidebar">
      <ul class="items">
        <v-body.sidebar.item v-for="(item, i) in items" :key="i" :item="item" />
      </ul>
    </template>
    <template slot="main">
      <router-view />
    </template>
  </v-body>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          name: 'Idiomas',
          route: 'languages',
          images: [
            {
              src: '/images/vue.png'
            }
          ]
        },
        {
          name: 'Frameworks',
          route: 'frameworks',
          images: [
            {
              src: '/images/vue.png'
            }
          ]
        },
        {
          name: 'Técnologias',
          route: 'technologies',
          images: [
            {
              src: '/images/vue.png'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.items {
  display: grid;
  gap: 9px;
  grid-auto-rows: max-content;
}
</style>