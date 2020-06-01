<template>
  <div class="items">
    <v-body.skills.item v-for="(item, i) in items" :key="i" :item="item" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          name: 'Español',
          images: [
            {
              src: '/images/es.png'
            }
          ],
          rate: 5
        },
        {
          name: 'Ingles',
          images: [
            {
              src: '/images/en.png'
            }
          ],
          rate: 4
        },
        {
          name: 'Pórtugues',
          images: [
            {
              src: '/images/pt.png'
            }
          ],
          rate: 1
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}
</style>