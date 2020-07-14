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
          name: 'Laravel',
          images: [
            {
              src: '/images/laravel.png'
            }
          ],
          rate: 5,
        },
        {
          name: 'Vue',
          images: [
            {
              src: '/images/vue.png'
            }
          ],
          rate: 5,
        },
        {
          name: 'Unity',
          images: [
            {
              src: '/images/unity.png'
            }
          ],
          rate: 4,
        },
        {
          name: 'Flutter',
          images: [
            {
              src: '/images/flutter.png'
            }
          ],
          rate: 4,
        },
        {
          name: 'React',
          images: [
            {
              src: '/images/react.png'
            }
          ],
          rate: 4,
        },
        {
          name: 'Android',
          images: [
            {
              src: '/images/android.png'
            }
          ],
          rate: 4,
        },
        {
          name: 'Angular',
          images: [
            {
              src: '/images/angular.png'
            }
          ],
          rate: 3,
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.items {
  display: grid;
  grid-template-columns: repeat(auto-fit, 290px);
  gap: 12px;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>