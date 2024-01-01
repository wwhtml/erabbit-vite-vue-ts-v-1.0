<script lang="ts" setup></script>

<template>
  <div class="app-top-nav">
    <div class="container">
      <ul class="nav">
        <li><span>请先登录</span></li>
        <li>|</li>
        <li><span>免费注册</span></li>
        <li>|</li>
        <li><span>我的订单</span></li>
        <li>|</li>
        <li><span>会员中心</span></li>
        <li>|</li>
        <li><span>帮助中心</span></li>
        <li>|</li>
        <li><span>关于我们</span></li>
        <li>|</li>
        <li>
          <span>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-phone"></use>
            </svg>

            手机版
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-top-nav {
  background-color: $app-top-nav-bg;
  height: 53px;
  color: #cdcdcd;
  .container {
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    .nav {
      display: flex;
      justify-content: flex-end;
      margin-left: auto;
      align-items: center;

      li:nth-child(n) {
        span {
          transition: all 0.3s ease;

          &:hover {
            color: $active-color;
            cursor: pointer;
          }
        }
      }
      li:nth-child(2n) {
        padding: 0 12px;
        color: #999;
      }
    }
  }
}
</style>
