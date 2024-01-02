<script lang="ts" setup>
import HomePanel from "./home-panel.vue";
import HomeSkeleton from "./home-skeleton.vue";

import { getHot } from "@/api/home/index";

import { useLazyData } from "@/hooks/index";

const list = ref<Hot[]>();
const box = ref();
useLazyData(box, async () => {
  try {
    const res: ResData<Hot[]> = await getHot();
    list.value = res.result;
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div class="home-hot">
    <div class="container">
      <home-panel title="人气推荐" sub-title="人气爆款 不容错过" ref="box">
        <template #right>
          <er-more></er-more>
        </template>
        <div style="position: relative">
          <Transition name="fade">
            <ul class="main" v-if="list && list.length">
              <li v-for="item in list" :key="item.id">
                <img :src="item.picture" :alt="item.alt" />
                <p class="title">{{ item.title }}</p>
                <p class="alt">{{ item.alt }}</p>
              </li>
            </ul>
            <home-skeleton v-else></home-skeleton>
          </Transition>
        </div>
      </home-panel>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-hot {
  margin-top: 10px;
  .container {
    display: flex;
    ul.main {
      display: flex;
      justify-content: space-between;

      font-size: 22px;
      & > li {
        width: 306px;
        height: 406px;
        text-align: center;
        background-color: #fff;
        @include hoverShadow;
        cursor: pointer;
        img {
          width: 306px;
          height: 306px;
        }
        p {
          padding: 12px 30px 0;
        }

        .title {
          color: $base-color;
          @include ell-1;
        }
        .alt {
          color: $light-color;
          font-size: 18px;
        }
      }
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
