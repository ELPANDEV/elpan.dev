<template>
  <router-link class="item" :class="$route.name == item.route ? 'active' : ''" :to="{ name: item.route }">
    <img :src="item.images[0].src">
    <strong>{{ item.name }}</strong>
  </router-link>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>

<style lang="scss" scoped>
.item {
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
.item.active {
  margin-left: 36px;
  margin-right: 0;
  opacity: 1;
  img {
    filter: saturate(1);
  }
}
</style>