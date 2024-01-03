<script lang="ts" setup></script>

<template>
  <div class="app-footer">
    <!-- <div class="container"></div> -->

    <div class="contact">
      <ul class="container">
        <li>
          <p class="title">客户服务</p>
          <ul>
            <li>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-kefunv"></use>
              </svg>
              <span>在线客服</span>
            </li>
            <li>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-wenti"></use>
              </svg>
              <span>问题反馈</span>
            </li>
          </ul>
        </li>
        <li>
          <p class="title">关注我们</p>
          <ul>
            <li class="icon-wrap">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weixin"></use>
              </svg>
              <span>公众号</span>
            </li>
            <li class="icon-wrap">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xinlangweibo"></use>
              </svg>
              <span>微博</span>
            </li>
          </ul>
        </li>
        <li>
          <p class="title">下载APP</p>
          <ul>
            <li class="code">
              <img src="../assets/images/qrcode.jpg" alt="xaa" height="92px" width="92px" />
            </li>
            <li class="down">
              <p>扫描二维码</p>
              <p>立马下载APP</p>
              <el-button class="btn" type="success">下载页面</el-button>
            </li>
          </ul>
        </li>
        <li>
          <p class="title">服务热线</p>
          <ul>
            <li class="tel">
              <p>400-0000-000</p>
              <small>周一至周日 8:00-18:00</small>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="extra">
      <div class="container">
        <ul class="slogan">
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-youhui"></use>
            </svg>
            <span>价格亲民</span>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-thumb-circle-o"></use>
            </svg>
            <span>物流快捷 </span>
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-wwuliu-"></use>
            </svg>
            <span>品质新鲜</span>
          </li>
        </ul>
        <div class="copyright">
          <p>
            <span>关于我们</span>
            <span>关于我们</span>
            <span>关于我们</span>
            <span>关于我们</span>
            <span>关于我们</span>
            <span>关于我们</span>
            <span>关于我们</span>
            <span>关于我们</span>
          </p>
          <p>CopyRight © 小兔鲜儿</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact {
  .container {
    display: flex;
    color: #999999;
    letter-spacing: 1px;
    padding: 60px 0 40px 0;

    & > li:first-child {
      padding-left: 0 !important ;
    }

    & > li:last-child {
      padding-right: 0;
    }

    & > li {
      padding: 0 72px;
      padding-bottom: 40px;
      ~ li {
        border-left: 1px solid #f2f2f2;
      }

      p.title {
        text-align: center;
        font-size: 18px;
      }

      & > ul {
        margin-top: 36px;
        display: flex;
        & > li {
          width: 92px;
          height: 92px;
          border: 1px solid #ededed;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-left: 10px;

          .icon {
            font-size: 36px;
            margin-bottom: 10px;
            color: #666666;
            transition: all 0.3s ease;
          }

          &:hover {
            .icon {
              color: $active-color;
            }
          }
        }

        & > li.code {
          width: 92px;
          height: 92px;
        }

        & > li.down {
          width: 110px;
          // height: 92px;
          border: none;
          // flex-grow: 1;
          .btn {
            margin-top: 10px;
          }
        }
        & > li.tel {
          // width: auto;
          // height: 92px;
          // flex: 1;
          display: flex;
          flex-direction: column;
          width: 160px;
          border: none;
          p {
            margin-bottom: 10px;
            font-size: 22px;
          }
        }
      }
    }
  }
}
.extra {
  min-height: 300px;
  background-color: #333333;
  .container {
    ul.slogan {
      color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 60px 100px;
      border-bottom: 1px solid #434343;

      li {
        display: flex;
        align-items: center;
        .icon {
          font-size: 56px;
          margin-right: 14px;
        }
        span {
          font-size: 28px;
          font-weight: 500;
        }
      }
    }
    .copyright {
      color: #999999;
      margin-top: 40px;
      font-size: 15px;
      letter-spacing: 2px;
      padding-bottom: 60px;
      p {
        text-align: center;
        margin-bottom: 20px;
        span {
          ~ span {
            border-left: 1px solid #999999;
          }
          padding: 0 10px;
        }
      }
    }
  }
}
</style>
