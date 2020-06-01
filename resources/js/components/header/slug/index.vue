<template>
  <div class="slug">
    <v-svg.memory />
    <strong class="name">el pan dev</strong>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.slug {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  gap: 1px;
  svg {
    width: 48px;
    height: 48px;
    margin-right: 12px;
  }
  .name {
    font-size: 24px;
    font-weight: 500;
    border-right: 1px solid #eee;
    text-transform: uppercase;
    padding-right: 12px;
  }
}
</style>