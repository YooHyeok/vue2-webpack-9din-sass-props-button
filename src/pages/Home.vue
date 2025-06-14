<template>
  <div>
    Home.vue Pages
  </div>
</template>

<script>
export default {
  /**@type {import("vue".PropType<Theme>)} */
  props: {
    theme: {
      type: String,
      required: true,
      default: 'normal'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';
div {
  color: $color-orange-200;
}
</style>