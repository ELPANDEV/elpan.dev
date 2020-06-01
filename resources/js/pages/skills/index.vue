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
        },
        {
          name: 'Frameworks',
          route: 'frameworks',
        },
        {
          name: 'Técnologias',
          route: 'technologies',
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