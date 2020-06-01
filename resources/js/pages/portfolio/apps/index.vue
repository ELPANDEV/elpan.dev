<template>
  <div class="proyects">
    <v-body.portfolio.proyect v-for="proyect in $portfolio.apps" :key="proyect.name" :proyect="proyect" />
  </div>
</template>

<style lang="scss" scoped>
.proyects {
  display: grid;
  grid-auto-rows: max-content;
  gap: 16px;
  @media screen and (min-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 240px));
    justify-content: center;
  }
  @media screen and (min-width: 1024px) {
    justify-content: left;
  }
}
</style>