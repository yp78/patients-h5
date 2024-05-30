<script setup lang="ts">
//一定有的功能：返回图标，返回效果，固定定位(组件内部实现)
//使用组件时候才能确定的功能：标题，右侧文字，点击右侧文字行为（props传入）
const onClickLeft = () => {}
const onClickRight = () => {}
</script>
<template>
  <van-nav-bar
    left-text=" "
    right-text="按钮"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</template>

<style lang="scss" scoped>
::v-deep() {
  .van-nav-bar {
    &__arrow {
      font-size: 18px;
      color: var(--cp-text1);
    }
    &__text {
      font-size: 15px;
    }
  }
}
</style>
