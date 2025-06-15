<template>
  <div class="page">
    <Navigation />
    <Content />
  </div>
</template>

<script>
import Navigation from '~/components/organisms/Navigation.vue'
import Content from '~/components/organisms/Content.vue'

export default {
    components: {
        Navigation,
        Content,
    },
}
</script>

<style lang="scss" scoped>
.page {
    display: flex;
    align-items: center;

    width: 1137px;

    margin: auto;
}
</style>