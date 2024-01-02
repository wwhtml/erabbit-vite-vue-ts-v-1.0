<script lang="ts" setup>
import HomeBanner from "./home-banner.vue";
import HomeCategory from "./home-category.vue";
</script>

<template>
  <div class="home">
    <div class="enter">
      <div class="container">
        <home-banner></home-banner>
        <home-category></home-category>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  min-height: 12000px;
  .enter {
    .container {
      position: relative;
    }
  }
}
</style>
