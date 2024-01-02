<script lang="ts" setup>
import { getBanner } from "@/api/home/index";
const bannerList = ref<Banner[]>();

const getBannerList = async () => {
  const res: ResData<Banner[]> = await getBanner();
  bannerList.value = res.result;
};
getBannerList();
</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <el-image :src="item.imgUrl"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
