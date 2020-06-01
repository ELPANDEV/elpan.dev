<template>
  <router-link class="item" :class="$route.name == item.route ? 'active' : ''" :to="{ name: item.route }">
    <v-svg.public v-if="item.route == 'languages'" />
    <v-svg.account-tree v-else-if="item.route == 'frameworks'" />
    <v-svg.layers v-else-if="item.route == 'technologies'" />
    <v-svg.laptop v-else-if="item.route == 'webs'" />
    <v-svg.smartphone v-else-if="item.route == 'apps'" />
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
@import '../../../../sass/variables';

.item {
  display: grid;
  align-items: center;
  background-color: white;
  padding: 12px 18px;
  opacity: 0.6;
  cursor: pointer;
  transition: 0.2s;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.12);
  svg {
    width: 24px;
    fill: #ddd;
  }
  strong {
    display: none;
    @media screen and (min-width: 1024px) {
      font-weight: 500;
      display: block;
    }
  }
  &:hover {
    opacity: 1;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: auto 1fr;  
    gap: 9px;
    border: 1px solid #eee;
    border-radius: 12px;
    margin-right: 36px;
  }
}
.item.active {

  svg {
    fill: map-get($map: $color, $key: app-light);
  }
  @media screen and (min-width: 1024px) {
    margin-left: 36px;
    margin-right: 0;
    opacity: 1;
  }
}
</style>