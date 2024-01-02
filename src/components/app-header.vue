<script lang="ts" setup></script>

<template>
  <div class="app-header">
    <div class="container">
      <h1 class="logo">
        <img src="../assets/images/logo.png" alt="小兔鲜" />
      </h1>

      <app-header-nav></app-header-nav>
      <div class="app-header-search">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-search"></use>
        </svg>
        <input type="text" placeholder="搜一搜" />
      </div>
      <div class="cart">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-cart"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-header {
  height: 132px;
  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 200px;
    margin-bottom: 15px;
  }

  .app-header-search {
    width: 170px;
    display: flex;
    align-items: center;

    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    &:hover {
      border-color: rgba(0, 0, 0, 0.2);
    }

    .icon {
      font-size: 20px;
      flex-shrink: 0;
      margin-right: 10px;
    }
    input {
      height: 32px;
      font-size: 14px;
    }
  }
  .cart {
    width: 50px;
    font-size: 22px;
    text-align: center;
  }
}
</style>
