<script lang="ts" setup>
import HomePanel from "./home-panel.vue";
import HomeSkeleton from "./home-skeleton.vue";
import { getNew } from "@/api/home/index";

import { useLazyData } from "@/hooks/index";

const list = ref<New[]>();
const box = ref();
useLazyData(box, async () => {
  try {
    const res: ResData<New[]> = await getNew();
    list.value = res.result;
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div class="home-new">
    <div class="container">
      <home-panel title="新鲜好物" sub-title="新鲜好物 品质靠谱" ref="box">
        <template #right>
          <er-more></er-more>
        </template>
        <div style="position: relative">
          <Transition name="fade">
            <ul class="main" v-if="list && list.length">
              <li v-for="item in list" :key="item.id">
                <img :src="item.picture" :alt="item.name" />
                <p class="title">{{ item.name }}</p>
                <p class="price">{{ item.price }}</p>
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
.home-new {
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
        background-color: #f0f9f4;
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
        .price {
          color: red;
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
