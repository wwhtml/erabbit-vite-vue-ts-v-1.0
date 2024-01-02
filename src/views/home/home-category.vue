<script lang="ts" setup>
const categoryStore = useCategoryStore();
const { list } = storeToRefs(categoryStore);

const categoryId = ref();

const currCategory = computed(() => {
  return list?.value?.find((item) => item.id === categoryId.value);
});
</script>

<template>
  <div class="home-category" @mouseleave="categoryId = null">
    <ul class="menu">
      <li v-for="item in list" :key="item.id" @mouseenter="categoryId = item.id">
        <span class="title">{{ item.name }}</span>
        <template v-if="item.children">
          <span v-for="c in item.children" :key="c.id">{{ c.name }}</span>
        </template>

        <template v-else>
          <ErSkeleton
            width="60px"
            height="18px"
            style="margin-right: 5px"
            bg="rgba(255,255,255,0.2)"
          />
          <ErSkeleton width="50px" height="18px" bg="rgba(255,255,255,0.2)" />
        </template>
      </li>
    </ul>

    <div class="layer" v-if="categoryId">
      <h4>分类推荐 <small>根据您的购买或者浏览记录推荐</small></h4>
      <ul>
        <li v-for="item in currCategory?.goods" :key="item.id">
          <img v-lazy="item.picture" alt="" />
          <div class="info">
            <p class="name">{{ item.name }}</p>
            <p class="desc">{{ item.desc }}</p>
            <p class="price"><i>¥</i>{{ item.price }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-category {
  position: absolute;
  z-index: 888;
  height: 500px;
  width: 1240px;
  display: flex;
  ul.menu {
    width: 250px;
    height: 500px;
    background-color: rgba(0, 0, 0, 0.8);
    > li {
      width: 250px;
      height: 50px;
      padding: 0 30px;
      line-height: 50px;
      color: #fff;
      @include ell-1;

      &:hover {
        background-color: $active-color;
      }
      span {
        margin-right: 10px;
        cursor: pointer;
        &.title {
          font-size: 16px;
        }
      }
    }
  }
  .layer {
    padding: 15px;
    background: hsla(0, 0%, 100%, 0.8);
    & > h4 {
      line-height: 80px;
      font-size: 20px;
      small {
        font-weight: 400;
        color: #666;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        width: 310px;
        height: 120px;
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid #eee;
        border-radius: 4px;
        background: #fff;
        display: flex;
        cursor: pointer;
        &:hover {
          background-color: #e3f9f4;
        }
        img {
          margin-right: 10px;
          width: 95px;
          height: 95px;
        }
        .info {
          width: 190px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .name {
            font-size: 16px;
            line-height: 24px;
            height: 48px;
            color: #666;
            @include ell-2;
          }
          .desc {
            color: #999;
            @include ell-1;
          }
          .price {
            color: red;
          }
        }
      }
    }
  }
}

.er-skeleton {
  animation: fade 1s linear infinite alternate;
}
@keyframes fade {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
</style>
