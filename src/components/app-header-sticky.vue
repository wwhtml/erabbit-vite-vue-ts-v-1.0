<script lang="ts" setup></script>

<template>
  <div class="app-header-sticky">
    <div class="container">
      <div class="logo">
        <img src="../assets/images/logo.png" width="160px" alt="" />
      </div>
      <app-header-nav></app-header-nav>
      <div class="right">
        <li><span>品牌</span></li>
        <li><span>专题</span></li>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-header-sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  z-index: 999;
  .container {
    display: flex;
    align-items: center;
    .logo {
      width: 200px;
      display: flex;
      justify-content: flex-end;
    }
    .right {
      display: flex;
      align-items: center;
      border-left: 2px solid $active-color;
      line-height: 1;
      & > li {
        margin-left: 40px;
        font-size: 0;
        span {
          font-size: 16px;
          cursor: pointer;
          &:hover {
            color: $active-color;
          }
        }
      }
    }
  }
}
</style>
