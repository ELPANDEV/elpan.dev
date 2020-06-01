<template>
  <nav class="nav">
    <router-link :to="{ name: 'webs' }" :class="this.$route.path.includes('portfolio') ? 'active' : ''">
      {{ $lang.portfolio[$lang.lang] }}
    </router-link>
    <router-link :to="{ name: 'languages' }" :class="this.$route.path.includes('skills') ? 'active' : ''">
      {{ $lang.skill[$lang.lang] }}
    </router-link>
  </nav>
</template>

<style lang="scss" scoped>
@import '../../../../sass/variables';

.nav {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, max-content));
  justify-content: center;
  align-items: center;
  background-color: white;
  a {
    text-transform: uppercase;
    position: relative;
    padding: 9px 0;
    &::after {
      content: ' ';
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 0px;
      height: 3px;
      background-color: map-get($map: $color, $key: app-dark);
      transition: 0.3s;
    }
  }
  a.active {
    font-weight: 500;
    &::after {
      width: calc(100% + 24px) !important;
    }
  }
  @media screen and (max-width: 1023px) {
    gap: 20%;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    padding: 12px;
    border-top: 1px solid #ddd;
  }
  @media screen and (min-width: 1024px) {
    gap: 56px;
  }
}
</style>