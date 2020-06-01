<template>
  <v-body>
    <template slot="sidebar">
      <ul class="technologies">
        <v-body.sidebar.item
          v-for="(type, i) in $portfolio.types" 
          :key="i" 
          :item="type"
        />
      </ul>
    </template>
    <template slot="main">
      <router-view />
    </template>
  </v-body>
</template>

<script>
export default {
  computed: {
    proyects: {
      get () {
        return this.$portfolio.proyects.filter(proyect => (
          this.$portfolio.filter.some(filter => filter.id == proyect.type)
        ))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.technologies {
  position: fixed;
  display: grid;
  gap: 9px;
  grid-auto-rows: max-content;
  @media screen and (min-width: 480px) {
    position: relative;
  }
}
</style>