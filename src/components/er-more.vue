<script lang="ts" setup>
interface Props {
  text?: string
}

const props = withDefaults(defineProps<Props>(), {
  text: '查看更多'
})
</script>

<template>
  <div class="er-more">
    <span>{{ props.text }}</span>
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-arrow-right"></use>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.er-more {
  font-size: 16px;
  color: #999999;
  cursor: pointer;
  &:hover {
    color: $active-color;
  }
}
</style>
