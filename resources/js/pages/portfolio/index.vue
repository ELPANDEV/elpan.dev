<template>
  <main class="portfolio">
    <ul class="technologies">
      <v-body.portfolio.technology 
        v-for="(technology, i) in $portfolio.technologies" 
        :key="i" 
        :technology="technology"
      />
    </ul>
    <transition-group name="list" tag="ul" class="proyects">
      <div class="list-item" v-for="proyect in proyects" :key="proyect.name">
        <v-body.portfolio.proyect :proyect="proyect" />
      </div>
    </transition-group>
  </main>
</template>

<script>
export default {
  computed: {
    proyects: {
      get () {
        return this.$portfolio.proyects.filter(proyect => (
          proyect.technologies.some(tech => (
            this.$portfolio.filter.some(filter => filter.id == tech.id)
          ))
        ))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1px;
  > * {
    padding: 0 36px;
  }
  .technologies {
    display: grid;
    gap: 9px;
    width: 280px;
    grid-auto-rows: max-content;
  }
  .proyects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 240px));
    grid-auto-rows: max-content;
    gap: 16px;
  }
}
</style>