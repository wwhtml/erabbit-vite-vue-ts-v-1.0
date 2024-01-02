<script lang="ts" setup>
import HomeBanner from "./home-banner.vue";
import HomeCategory from "./home-category.vue";
import HomeNew from "./home-new.vue";
import HomeHot from "./home-hot.vue";
</script>

<template>
  <div class="home">
    <div class="enter">
      <div class="container">
        <home-banner></home-banner>
        <home-category></home-category>
      </div>
    </div>
    <home-new></home-new>
    <home-hot></home-hot>
  </div>
</template>

<style scoped lang="scss">
.home {
  min-height: 12000px;
  .enter {
    height: 500px;
    background-color: #f5f5f5;
    .container {
      position: relative;
      background: #f0f2f5;
    }
  }
}
</style>
