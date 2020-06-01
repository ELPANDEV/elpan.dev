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
          name: 'PHP',
          images: [
            {
              src: '/images/php.png'
            }
          ],
          rate: 5
        },
        {
          name: 'Javascript',
          images: [
            {
              src: '/images/javascript.png'
            }
          ],
          rate: 5
        },
        {
          name: 'Html',
          images: [
            {
              src: '/images/html.png'
            }
          ],
          rate: 5
        },
        {
          name: 'C#',
          images: [
            {
              src: '/images/cshare.png'
            }
          ],
          rate: 4
        },
        {
          name: 'CSS',
          images: [
            {
              src: '/images/css.png'
            }
          ],
          rate: 5
        },
        {
          name: 'Docker',
          images: [
            {
              src: '/images/docker.png'
            }
          ],
          rate: 3
        },
        {
          name: 'git',
          images: [
            {
              src: '/images/git.png'
            }
          ],
          rate: 5
        },
        {
          name: 'Java',
          images: [
            {
              src: '/images/java.png'
            }
          ],
          rate: 4
        },
        {
          name: 'MySql',
          images: [
            {
              src: '/images/mysql.png'
            }
          ],
          rate: 5
        },
        {
          name: 'Sql',
          images: [
            {
              src: '/images/sql.png'
            }
          ],
          rate: 5
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