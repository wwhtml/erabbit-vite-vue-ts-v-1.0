<script lang="ts" setup></script>

<template>
  <div class="skeleton-wrap">
    <el-skeleton v-for="i in 4" :key="i" animated style="width: 306px; background-color: #fff">
      <template #template>
        <el-skeleton-item variant="image" style="width: 306px; height: 306px" />

        <el-skeleton-item
          variant="h3"
          style="width: 80%; height: 24px; margin-top: 16px"
        ></el-skeleton-item>
        <el-skeleton-item
          variant="text"
          style="width: 60%; height: 24px; margin-top: 16px"
        ></el-skeleton-item>
      </template>
    </el-skeleton>
  </div>
</template>

<style scoped lang="scss">
.skeleton-wrap {
  display: flex;
  justify-content: space-between;
  width: 1240px;
  height: 406px;
  .el-skeleton {
    text-align: center;
    background-color: #fff;
  }
}
</style>
