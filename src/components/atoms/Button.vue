<template>
  <button
    :data-theme="theme"
    class="button">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      required: true,
      default: 'normal'
    },
    label: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/main.scss';
/* 
  data-theme props 값 기준 조건부 css 적용.
  하나의 파일에서 8개의 버튼의 css 관리
*/

/* data-theme='normal' */
.button {
  outline: none;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 9px 12px;

  color: $color-white-100;
  border-radius: 4px;
  background: transparent;

  cursor: pointer;

  /* [data-theme='normal']:hover */
  &:hover {
    background-color: $color-white-300;
  }

  &[data-theme='filled'] {
    background-color: $color-orange-100;
    
    /* [data-theme='filled']:hover */
    &:hover {
      padding: 8px 11px;
      border: 1px solid $color-orange-200;
      background-color: $color-orange-100;
    } 
  }

  &[data-theme='secondary'] {
    border: 1px solid $color-orange-100;
    background-color: $color-white-000;
    color: $color-orange-100;

    /* [data-theme='secondary']:hover */
    &:hover {
      background-color: $color-white-100;
    } 
  }
  &[data-theme='ghost'] {
    background-color: $color-white-000;
    color: $color-orange-100;

    /* [data-theme='ghost']:hover */
    &:hover {
      padding: 8px 11px;

      border: 1px solid $color-orange-200;
      background-color: $color-white-100;
    } 
  }
}
</style>