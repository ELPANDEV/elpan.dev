<template>
  <div id="layout">
    <img class="img" src="https://tstalent.net/site/images/portada.jpg">
    <v-header />
    <v-body>
      <router-view />
    </v-body>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['Lang', 'portfolio'])
  },
  created () {
    this.$portfolio.filter = [this.$portfolio.technologies[2]]
  }
}
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  min-width: 100vh;
  z-index: -1;
  opacity: 1;
}
</style>
