<template>
  <a class="proyect" :href="proyect.url" target="_blank">
    <img :src="proyect.images[0].src">
    <h3>{{ proyect.name }}</h3>
    <ul class="techs">
      <v-body.portfolio.proyect.technology
        v-for="(technology, i) in proyect.technologies"
        :key="i"
        :technology="technology"
      />
    </ul>
  </a>
</template>

<script>
export default {
  props: {
    proyect: Object
  }
}
</script>

<style lang="scss" scoped>
.proyect {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.12);
  display: grid;
  cursor: pointer;
  transition: 0.3s;
  width: 240px;
  position: relative;
  border-radius: 12px;
  transition: 0.1s;
  margin: auto;
  img {
    width: 100%;
    border-radius: 12px 12px 0 0;
  }
  h3 {
    font-size: 13px;
    text-transform: uppercase;
    text-align: center;
    padding: 12px 0;
    background-color: white;
    border-radius: 0 0 12px 12px;
  }
  .techs {
    position: absolute;
    left: 12px;
    top: 12px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0, max-content));
    gap: 9px;
  }
  &:hover {
    transform: scale(1.02);
  }
}
</style>