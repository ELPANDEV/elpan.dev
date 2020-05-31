<template>
  <div class="project-technology">
    <img :src="technology.images[0].src">
    <span class="description">
      {{ technology.name }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    technology: Object
  }
}
</script>

<style lang="scss" scoped>
.project-technology {
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.24);
  border-radius: 100%;
  width: 28px;
  height: 28px;
  transition: 0.2s;
  position: relative;
  img {
    position: absolute;
    width: 18px;
    height: 18px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .description {
    position: absolute;
    left: 50%;
    top: 0;
    width: max-content;
    transform: translate(-50%, 50%) scale(0);
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.48);
    padding: 3px 9px;
    font-size: 10px;
    transition: 0.2s;
    opacity: 0;
    z-index: 2;
  }
  &:hover {
    transform: scale(1.2);
    .description {
      opacity: 1;
      transform: translate(-50%, -80%) scale(1);
    }
  }
}
</style>