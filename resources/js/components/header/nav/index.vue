<template>
  <nav class="nav">
    <router-link :to="{ name: 'portfolio' }" :class="$route.name == 'portfolio' ? 'active' : ''">
      {{ $lang.portfolio[$lang.lang] }}
    </router-link>
    <router-link :to="{ name: 'about' }" :class="$route.name == 'about' ? 'active' : ''">
      {{ $lang.about[$lang.lang] }}
    </router-link>
    <router-link :to="{ name: 'contact' }" :class="$route.name == 'contact' ? 'active' : ''">
      {{ $lang.contact[$lang.lang] }}
    </router-link>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../../../sass/variables';

.nav {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, auto));
  gap: 56px;
  justify-content: center;
  align-items: center;
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
}
</style>