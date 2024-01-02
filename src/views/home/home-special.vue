<script lang="ts" setup>
import HomePanel from "./home-panel.vue";
import { getSpecial } from "@/api/home/index";

import { useLazyData } from "@/hooks";

const target = ref(null);
const list = ref<Special[]>();
useLazyData(target, async () => {
  const res: ResData<Special[]> = await getSpecial();
  list.value = res.result;
});
</script>

<template>
  <div class="home-special">
    <home-panel title="最新专题" ref="target">
      <template #right>
        <er-more></er-more>
      </template>

      <transition name="fade">
        <ul class="main" v-if="list && list.length">
          <li class="card" v-for="item in list" :key="item.id">
            <div class="avatar">
              <img :src="item.detailsUrl" alt="" />
            </div>

            <div class="layer">
              <div class="meta">
                <div class="left">
                  <p class="title">{{ item.title }}</p>
                  <p class="desc">{{ item.summary }}</p>
                </div>

                <div class="price">{{ item.lowestPrice }}</div>
              </div>
            </div>
            <p class="info">
              <span>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-zan"></use>
                </svg>
                {{ item.collectNum }}
              </span>
              <span>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-chakan"></use>
                </svg>

                {{ item.collectNum }}</span
              >
              <span class="last">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-pinglun"></use>
                </svg>
                {{ item.collectNum }}</span
              >
            </p>
          </li>
        </ul>

        <div class="skeleton" style="display: flex; justify-content: space-between" v-else>
          <er-skeleton
            v-for="item in 3"
            :key="item"
            width="404px"
            height="360px"
            animated
          ></er-skeleton></div
      ></transition>
    </home-panel>
  </div>
</template>

<style scoped lang="scss">
.home-special {
  background: #f5f5f5;
  padding-bottom: 40px;
  ul.main {
    display: flex;
    justify-content: space-between;
    height: 360px;
    & > li.card {
      @include hoverShadow;
      flex-shrink: 0;
      position: relative;
      width: 404px;
      min-height: 306px;
      cursor: pointer;
      .avatar {
        width: 404px;
        height: 288px;
        img {
          width: 100%;
          object-fit: cover;
        }
      }

      .layer {
        position: absolute;
        top: 0;
        left: 0;
        width: 404px;
        height: 288px;

        background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.8), transparent 50%);

        .meta {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 16px;
          align-items: center;
          .left {
            // width: 70%;
            flex: 0 0 270px;
            overflow: hidden;

            .title {
              font-size: 22px;
              color: #fff;
              @include ell-1;
            }
            .desc {
              font-size: 18px;
              color: #999999;
              @include ell-1;
              margin-top: 10px;
            }
          }

          .price {
            font-size: 14px;
            color: red;
            padding: 2px 4px;
            border-radius: 3px;
            background-color: #fff;
            align-self: end;
          }
        }
      }

      .info {
        padding: 0 12px;
        height: 72px;
        background-color: #fff;
        display: flex;
        align-items: center;
        font-size: 16px;
        span {
          margin-right: 25px;
          .icon {
            color: #666;
          }
          &:last-child {
            margin-right: 0;
            margin-left: auto;
          }
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
