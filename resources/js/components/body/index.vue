<template>
  <div class="body">
    <div class="sidebar">
      <slot name="sidebar"/>
    </div>
    <main>
      <slot name="main"/>
    </main>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.body {
  margin-top: 128px;
  @media screen and (min-width: 480px) {
    margin-top: 156px;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 156px;
    display: grid;
    justify-content: center;
    gap: 24px;
    grid-template-columns: 240px 640px;
  }
  @media screen and (min-width: 1180px) {
    grid-template-columns: 240px 752px;
  }
  .sidebar {
    position: fixed;
    left: 0;
    top: 156px;
    z-index: 9;
    @media screen and (min-width: 1024px) {
      position: relative;
      top: 0;
      left: 0;
    }
  }
}
</style>