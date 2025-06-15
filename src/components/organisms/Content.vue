<template>
  <div class="content">
    <div class="content__text-box">
      <span class="content__text-box__title">How to start :</span>
      <div class="content__text-box__subTitle-box">
        <span class="subTitle">1. Create a page</span>
        <span class="subTitle">2. Add boards to page</span>
      </div>
      <Button
        :theme="'secondary'"
        label="Add New Page"
        class="content__text-box__button" />
    </div>
  </div>
</template>

<script>
import Button from '~/components/atoms/Button.vue'

export default {
    components: { Button },
    setup() {
        return {}
    },
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';

.content {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 855px;
    height: 100vh; // 1080px

    border-right: 1px solid #e6e6e6;
    background-color: #f9f9f9;

    &__text-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        width: 182px;

        gap: 19px;

        &__title {
            font-size: 28px;
            font-weight: 700;
        }
        &__subTitle-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .subTitle {
                font-size: 18px;
                font-weight: 500;
                line-height: 32px;
            }
        }
        &__button {
            width: 100%;
        }
    }
}
</style>