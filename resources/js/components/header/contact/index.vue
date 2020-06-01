<template>
  <ul class="contacts">
    <li>
      <v-svg.call />
      <span>0984850518</span>
    </li>
    <li>
      <v-svg.email />
      <span>javoavmystery@gmail.com</span>
    </li>
  </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.contacts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, max-content));
  gap: 6px;
  justify-content: right;
  li {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 12px;
    align-items: center;
    span {
      display: none;
      @media screen and (min-width: 640px) {
        display: block;
      }
    }
  }
  @media screen and (min-width: 480px) {
    gap: 24px;
  }
  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(auto-fit, minmax(0, max-content));
    gap: 24px;
    justify-content: center;
  }
}
</style>