<template>
  <header class="header">
    <v-header.slug />
    <v-header.nav />
    <v-header.contact />
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../../../sass/variables';

.header {
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 12px;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.06);
  z-index: 9;
  svg {
    fill: map-get($map: $color, $key: app-light);
  }
  @media screen and (min-width: 480px) {
    padding: 24px 56px;
  }
  @media screen and (min-width: 640px) {
    padding: 24px;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: auto 1fr 1fr;
    padding: 24px 8%;
    justify-content: center;
  }
}
</style>