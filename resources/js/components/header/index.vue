<template>
  <header>
    <v-header.slug />
    <v-header.nav />
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
header {
  display: grid;
  grid-template-columns: auto 1fr;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 24px 15%;
  border-bottom: 1px solid #ddd;
  background-color: white;
}
</style>