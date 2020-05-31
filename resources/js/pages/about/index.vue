<template>
  <main class="about">
    <ul class="items">
      <v-body.about.item v-for="(item, i) in items" :key="i" :item="item" />
    </ul>
    <router-view />
  </main>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          name: 'Educacón',
          route: 'education',
          images: [
            {
              src: '/images/vue.png'
            }
          ]
        },
        {
          name: 'Experiencia',
          route: 'experience',
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
.about{
  display: grid;
  grid-template-columns: auto 1fr;
  > * {
    padding: 0 36px;
  }
  .items {
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