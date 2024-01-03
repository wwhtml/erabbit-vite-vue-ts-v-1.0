<script lang="ts" setup>
const categoryStore = useCategoryStore();
categoryStore.getCategoryLsit();

const top = ref();
const handlePageScroll = ({ scrollTop }: { scrollLeft: number; scrollTop: number }) => {
  top.value = scrollTop;
};
</script>

<template>
  <app-page @scroll="handlePageScroll">
    <div class="layout">
      <app-top-nav></app-top-nav>
      <app-header></app-header>
      <Transition name="fade">
        <app-header-sticky v-show="top > 70"></app-header-sticky>
      </Transition>

      <div class="main">
        <router-view></router-view>
      </div>
      <app-footer></app-footer>
    </div>
  </app-page>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leavel-active {
  transition: all 0.3s ease;
}

.fade-leavel-to,
.fade-enter-from {
  opacity: 0;
  height: 0px;
  z-index: 2;
}
</style>
