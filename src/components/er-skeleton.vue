<script lang="ts" setup>
interface Props {
  bg?: string;
  width?: string;
  height?: string;
  animated?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  bg: "#efefef",
  width: "100px",
  height: "20px",
  animated: false
});
</script>

<template>
  <div class="er-skeleton" :style="{ width, height }" :class="{ shan: animated }">
    <div class="block" :style="{ backgroundColor: bg }"></div>
  </div>
</template>

<style scoped lang="scss">
.er-skeleton {
  display: inline-block;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  .block {
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
}
.shan {
  &::after {
    content: "";
    position: absolute;
    animation: shan 1.5s ease 0s infinite;
    top: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-45deg);
  }
}
@keyframes shan {
  0% {
    left: -100%;
  }
  100% {
    left: 120%;
  }
}
</style>
