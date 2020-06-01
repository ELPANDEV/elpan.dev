<template>
  <ul class="contacts">
    <li>
      <v-svg.call />
      <span>0984859518</span>
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
  gap: 24px;
  justify-content: center;
  li {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 12px;
    align-items: center;
  }
}
</style>