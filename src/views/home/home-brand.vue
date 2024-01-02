<script lang="ts" setup>
import HomePanel from "./home-panel.vue";
import { getBrand } from "@/api/home/index";

import { useLazyData } from "@/hooks";

const target = ref(null);
const brandList = ref<Brand[]>();
useLazyData(target, async () => {
  const res: ResData<Brand[]> = await getBrand();
  brandList.value = res.result;
});
</script>

<template>
  <home-panel class="home-brand" title="热门品牌" subTitle="国际经典 品质保证" height="460px">
    <template #right>
      <er-more></er-more>
    </template>
    <div ref="target" style="position: relative; height: 406px">
      <Transition name="fade">
        <div class="box" v-if="brandList && brandList.length">
          <ul :style="{ transform: `translateX(${-1 * 1240}px)` }">
            <li v-for="item in brandList" :key="item.id"><img :src="item.picture" alt="" /></li>
          </ul>
        </div>
        <div v-else class="skeleton">
          <ErSkeleton
            class="item"
            v-for="i in 5"
            :key="i"
            animated
            bg="#e4e4e4"
            width="240px"
            height="305px"
          />
        </div>
      </Transition>
    </div>
  </home-panel>
</template>

<style scoped lang="scss">
.home-brand {
  background-color: #f5f5f5;
  .box {
    width: 100%;
    overflow: hidden;
  }
  ul {
    width: 200%;
    display: flex;

    li {
      width: 240px;
      margin-right: 10px;
      img {
        width: 240px;
        height: 305px;
      }
    }
  }
}
.skeleton {
  width: 100%;
  display: flex;
  background-color: #fff;
  .item {
    margin-right: 10px;
    width: 240px;
    &:nth-child(5n) {
      margin-right: 0;
    }
  }
}

.fade {
  &-leave {
    &-active {
      position: absolute;
      width: 100%;
      transition: opacity 0.5s 0.2s;
      z-index: 1;
    }
    &-to {
      opacity: 0;
    }
  }
}
</style>
