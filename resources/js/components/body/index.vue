<template>
  <div class="body">
    <div>
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
  margin-top: 156px;
  display: grid;
  grid-template-columns: 240px 880px;
  gap: 24px;
}
</style>