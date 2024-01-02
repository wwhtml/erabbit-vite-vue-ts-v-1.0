<script lang="ts" setup>
defineProps<{
  title?: string;
  subTitle?: string;
  height?: string;
}>();
</script>

<template>
  <div class="home-panel" :style="{ height: height }">
    <div class="container">
      <div class="head">
        <h3>
          <span class="title">{{ title }}</span>
          <small>{{ subTitle }}</small>
        </h3>
        <slot name="right"></slot>
      </div>
      <slot>展示区域</slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-panel {
  .head {
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    padding: 40px 0;
    padding-left: 10px;
    h3 {
      flex: 1;
      font-size: 32px;
      line-height: 1;
      .title {
        margin-right: 20px;
      }
      small {
        font-size: 16px;
        color: #999999;
      }
    }
  }
}
</style>
