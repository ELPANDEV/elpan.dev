<template>
  <v-body>
    <template slot="sidebar">
      <ul class="technologies">
        <v-body.portfolio.technology 
          v-for="(type, i) in $portfolio.types" 
          :key="i" 
          :technology="type"
        />
      </ul>
    </template>
    <template slot="main">
      <transition-group name="list" tag="ul" class="proyects">
        <div class="list-item" v-for="proyect in proyects" :key="proyect.name">
          <v-body.portfolio.proyect :proyect="proyect" />
        </div>
      </transition-group>
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
  display: grid;
  gap: 9px;
  grid-auto-rows: max-content;
}
.proyects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 240px));
  grid-auto-rows: max-content;
  gap: 16px;
}
</style>