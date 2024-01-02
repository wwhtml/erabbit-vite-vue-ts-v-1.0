<script lang="ts" setup>
const categoryStore = useCategoryStore();
const { list } = storeToRefs(categoryStore);

const categoryId = ref();
</script>

<template>
  <ul class="app-header-nav">
    <li><span>首页</span></li>
    <li
      v-for="item in list"
      :key="item.id"
      @mousemove="
        () => {
          categoryId = item.id;
        }
      "
      @mouseleave="
        () => {
          categoryId = undefined;
        }
      "
    >
      <span @click="$router.push(`/category/${item.id}`)">{{ item.name }}</span>
      <ul class="layer" :class="{ open: categoryId == item.id }">
        <li v-for="c in item.children" :key="c.id" @click="$router.push(`/category/sub/${c.id}`)">
          <img :src="c.picture" alt="" />
          <p>{{ c.name }}</p>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.app-header-nav {
  width: 820px;
  padding-left: 40px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  line-height: 32px;
  position: relative;

  & > li {
    margin-right: 40px;
    > span {
      display: block;
      border-bottom: 1px solid transparent;
      cursor: pointer;
      // transition: all 0.3s ease;
      &:hover {
        color: $active-color;
        border-color: $active-color;
      }
    }

    ul.layer {
      position: absolute;
      top: 56px;
      left: -200px;
      width: 1240px;
      height: 0;
      padding: 0 70px;
      opacity: 0;
      background-color: #fff;
      box-shadow: 0 0 5px #ccc;
      overflow: hidden;

      display: flex;
      align-items: center;
      transition: all 0.2s 0.1s;
      &.open {
        // display: block;
        opacity: 1;
        height: 132px;
      }

      & > li {
        // width: 110px;
        text-align: center;
        margin-right: 40px;

        cursor: pointer;
        img {
          width: 60px;
          height: 60px;
        }
        p {
          padding-top: 10px;
        }
        &:hover {
          p {
            color: $active-color;
          }
        }
      }
    }
  }
}
</style>
