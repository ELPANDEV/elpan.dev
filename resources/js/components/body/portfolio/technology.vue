<template>
  <li class="technology" :class="active ? 'active' : ''" @click="select()">
    <img :src="technology.images[0].src">
    <strong>{{ technology.name }}</strong>
  </li>
</template>

<script>
export default {
  props: {
    technology: Object
  },
  computed: {
    active: {
      get () {
        return this.$portfolio.filter.some(filter => filter.id == this.technology.id)
      }
    }
  },
  methods: {
    select () {
      if (!this.active) {
        this.$portfolio.filter.push(this.technology)
      } else {
        this.$portfolio.filter = this.$portfolio.filter.filter(e => e.id != this.technology.id)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.technology {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 9px;
  align-items: center;
  border: 1px solid #eee;
  background-color: white;
  padding: 12px 18px;
  border-radius: 12px;
  opacity: 0.6;
  cursor: pointer;
  transition: 0.2s;
  margin-right: 36px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.12);
  img {
    width: 28px;
    filter: saturate(0);
  }
  strong {
    font-weight: 500;
  }
  &:hover {
    opacity: 1;
  }
}
.technology.active {
  margin-left: 36px;
  margin-right: 0;
  opacity: 1;
  img {
    filter: saturate(1);
  }
}
</style>