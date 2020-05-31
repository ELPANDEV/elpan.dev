<template>
  <main class="contact">
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
          name: 'Whatsapp',
          route: 'whatsapp',
          images: [
            {
              src: '/images/vue.png'
            }
          ]
        },
        {
          name: 'Email',
          route: 'email',
          images: [
            {
              src: '/images/vue.png'
            }
          ]
        },
        {
          name: 'Formulario',
          route: 'form',
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
.contact {
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