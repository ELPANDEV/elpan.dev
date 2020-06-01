<template>
  <div id="layout">
    <v-header />
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['Lang', 'portfolio'])
  },
  created () {
    this.$portfolio.filter = [this.$portfolio.types[0]]
  }
}
</script>
