<template>
  <div class="item">
    <img :src="item.images[0].src">
    <span>
      {{ item.name }}
    </span>
    <ul class="rates">
      <li v-for="i in 5" :key="i" :class="`rate ${rateClass(i)}`"></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  },
  methods: {
    rateClass (i) {
      if (i <= this.item.rate) {
        return 'color'
      }

      return 'grey'
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  display: grid;
  grid-template-columns: auto 90px 1fr;
  gap: 9px;
  align-items: center;
  border: 1px solid #eee;
  background-color: white;
  padding: 18px 24px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.06);
  img {
    width: 24px;
  }
  .rates {
    display: grid;
    grid-template-columns: repeat(5, minmax(12px, 36px));
    gap: 12px;
    justify-content: center;
    .rate {
      height: 6px;
      border-radius: 2px;
    }
    .rate.color {
      &:nth-child(1) { background-color: rgb(255, 0, 0) }
      &:nth-child(2) { background-color: rgb(255, 200, 0) }
      &:nth-child(3) { background-color: rgb(200, 255, 0) }
      &:nth-child(4) { background-color: rgb(150, 255, 0) }
      &:nth-child(5) { background-color: rgb(100, 255, 0) }
    }
    .rate.grey {
      background-color: #ddd;
    }
  }
}
</style>