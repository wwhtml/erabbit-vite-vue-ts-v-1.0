<script lang="ts" setup>
import HomePanel from "./home-panel.vue";
import { getProduct } from "@/api/home/index";
import { useLazyData } from "@/hooks";

const list = ref<Product[]>();

const box = ref(null);
useLazyData(box, async () => {
  const res: ResData<Product[]> = await getProduct();
  list.value = res.result;
});
</script>

<template>
  <div class="home-product" ref="box">
    <home-panel v-for="item in list" :key="item.id" :title="item.name">
      <template #right>
        <ul class="menu">
          <li v-for="menu in item.children" :key="menu.id">
            <span>{{ menu.name }}</span>
          </li>
        </ul>
        <er-more></er-more>
      </template>

      <div class="main">
        <div class="logo">
          <img v-lazy="item.picture" alt="" />
          <div class="box">
            <p>{{ item.name }}管</p>
            <p>{{ item.saleInfo }}</p>
          </div>
        </div>
        <ul class="content">
          <li v-for="good in item.goods" :key="good.id">
            <img v-lazy="good.picture" alt="" height="160px" width="160px" />
            <p class="name">{{ good.name }}</p>
            <p class="desc">{{ good.desc }}</p>
            <p class="price">{{ good.price }}</p>

            <div class="extra">
              <span>找相似</span>
              <span>发现更多宝贝 》</span>
            </div>
          </li>
        </ul>
      </div>
    </home-panel>
  </div>
</template>
<style lang="scss" scoped>
.home-product {
  min-height: 725px;
  .menu {
    display: flex;
    margin-right: 50px;
    & > li {
      margin-left: 24px;
      span {
        transition: all 0.3 ease;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          background-color: $active-color;
          color: #fff;
        }
      }
    }
  }

  .main {
    display: flex;
    .logo {
      width: 240px;
      height: 610px;
      position: relative;
      margin-right: 10px;
      flex-shrink: 0;
      img {
        width: 100%;
        height: 100%;
      }
      .box {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        color: #fff;
        height: 66px;
        display: flex;
        font-size: 18px;

        p {
          display: flex;
          align-items: center;
          justify-content: center;
          &:first-child {
            width: 76px;
            background: rgba(0, 0, 0, 0.9);
          }
          &:last-child {
            width: 112px;
            background: rgba(0, 0, 0, 0.6);
          }
        }
      }
    }

    ul.content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      transition: all 0.3s ease;
      cursor: pointer;

      & > li {
        position: relative;
        border: 1px solid transparent;
        width: 240px;
        height: 300px;
        padding: 10px 30px;
        font-size: 16px;
        overflow: hidden;

        img {
          // text-align: center;
          display: flex;
          margin: 0 auto;
        }

        p {
          &.name {
            margin-top: 6px;
            height: 44px;
            line-height: 22px;
            @include ell-2;
          }
          &.desc {
            margin-top: 6px;
            color: #999999;
            @include ell-1;
          }
          &.price {
            margin-top: 10px;
            color: red;
          }
        }

        .extra {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 86px;
          // height: 1px;
          color: #fff;
          background-color: $active-color;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          transform: translateY(86px);

          span {
            &:first-child {
              width: 120px;
              border-bottom: 1px solid #fff;
              text-align: center;
              font-size: 18px;
              line-height: 40px;
            }
            &:last-child {
              font-size: 14px;
              line-height: 30px;
            }
          }
        }

        &:hover {
          border: 1px solid $active-color;
          .extra {
            height: 86px;
            transform: translateY(0);
          }
        }
      }
    }
  }
}
</style>
