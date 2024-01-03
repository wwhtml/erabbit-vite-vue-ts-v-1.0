<script lang="ts" setup>
//api
import { getBanner } from "@/api/home/index";
import { findTopCategory } from "@/api/category/index";

//获取路由参数，作为获取后台数据的查询字符串
const route = useRoute();

const bannerList = ref<Banner[]>();
const topCategory = ref<TopCategory>();

const getBannerList = async () => {
  try {
    const res: ResData<Banner[]> = await getBanner();
    bannerList.value = res.result;
  } catch (error) {
    console.log(error);
  }
};

const getTopCategory = async (id: string) => {
  try {
    const res: ResData<TopCategory> = await findTopCategory(id);
    topCategory.value = res.result;
  } catch (error) {
    console.log(error);
  }
};
getBannerList();

watch(
  () => route.params.id,
  () => {
    getTopCategory(route.params.id as string);
  },
  { immediate: true }
);
</script>

<template>
  <div class="category-level-first">
    <div class="container">
      <!-- 面包屑 -->
      <!-- 轮播图 -->
      <el-carousel height="500px">
        <el-carousel-item v-for="item in bannerList" :key="item.id">
          <el-image :src="item.imgUrl"></el-image>
        </el-carousel-item>
      </el-carousel>

      <!-- 二级分类目录 -->
      <div class="category">
        <div class="head">全部分类</div>
        <ul>
          <li v-for="item in topCategory?.children" :key="item.id">
            <img v-lazy="item.picture" alt="" />
            <p>{{ item.name }}</p>
          </li>
        </ul>
      </div>
      <!-- 分类关联的商品 -->
      <div class="goods" v-for="item in topCategory?.children" :key="item.id">
        <div class="head">
          <h3>-- {{ item.name }} --</h3>
          <p>温暖柔软，品质之选</p>
        </div>
        <ul class="body">
          <li class="goods-item" v-for="good in item.goods" :key="good.id">
            <div class="img">
              <img v-lazy="good.picture" alt="111" />
            </div>
            <p class="name">{{ good.name }}</p>
            <p class="desc">{{ good.desc }}</p>
            <p class="price">{{ good.price }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.category-level-first {
  min-height: 1000px;
  background-color: #f5f5f5;
  padding-bottom: 20px;
  .container {
    .category {
      margin-top: 20px;
      background-color: #fff;
      .head {
        @include font(#666666, 28px, 500);
        height: 100px;
        line-height: 100px;
        text-align: center;
      }
      ul {
        display: flex;
        padding: 0 32px;
        li {
          text-align: center;
          width: 168px;
          height: 160px;
          cursor: pointer;
          img {
            width: 100px;
            height: 100px;
          }
          p {
            height: 40px;
            line-height: 40px;
            font-size: 18px;
          }
          transition: all 0.3s ease;
          &:hover {
            color: $active-color;
          }
        }
      }
    }

    .goods {
      background-color: #fff;
      margin-top: 20px;
      .head {
        height: 130px;
        // text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        h3 {
          font-size: 28px;
          color: $light-color;
        }
        p {
          font-size: 20px;
          color: $lighter-color;
          margin-top: 15px;
        }
      }
      ul.body {
        display: flex;
        justify-content: space-between;
        padding: 0 65px 30px;
        li.goods-item {
          width: 220px;
          height: 300px;
          padding: 20px 30px;
          text-align: center;
          @include hoverShadow;
          cursor: pointer;

          .img {
            width: 160px;
            height: 160px;
          }
          p {
            padding-top: 10px;
            @include ell-1;
          }
          .name {
            @include font($base-color, 16px);
          }
          .desc {
            @include font($light-color, 14px);
          }
          .price {
            @include font(red, 20px);
          }
        }
      }
    }
  }
}
</style>
