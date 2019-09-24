<template>
  <div class='header'>
    <!-- 头部 -->
    <div class="header-box">
      <div class="content-wrapper">
        <div class="avatar">
          <img :src="seller.avatar">
        </div>
        <div class="content">
          <div class="title">
            <span class='brand'></span>
            <span class="name">{{ seller.name }}</span>
          </div>
          <div class="description">{{ seller.description }}/{{ seller.deliveryTime }}分钟送达</div>
          <div
            class="support"
            v-if="seller.supports"
          >{{ seller.supports[0].description }}</div>
        </div>
        <div
          class="support-count"
          v-if="seller.supports"
          @click="openDetail"
        >
          <span class="count">{{ seller.supports.length }}个</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
      <div
        class='bulletin-wrapper'
        @click="openDetail"
      >
        <span class="bulletin-title"></span>
        <span class="bulletin-text">{{ seller.bulletin }}</span>
        <i class='icon-keyboard_arrow_right'></i>
      </div>
      <div class="background">
        <img :src="seller.avatar">
      </div>
    </div>
    <!-- 详情 -->
    <transition
      enter-active-class="animated bounceInDown"
      leave-active-class="animated bounceOutUp"
    >
      <div
        class="detail"
        v-if="detailShow"
      >
        <div class="
      detail-wrapper">
          <h1 class="detail-name">{{ seller.name }}</h1>
          <star :score="seller.score"></star>
          <div class="detail-title">
            <p class="line"></p>
            <p class="text">优惠信息</p>
            <p class="line"></p>
          </div>
          <ul class="detail-supports">
            <li
              v-for="(item,index) in seller.supports"
              :key='index'
            ><i
                class="icon"
                :class="classMap[item.type]"
              ></i><span class="text">{{ item.description }}</span></li>
          </ul>
          <div class="detail-title">
            <p class="line"></p>
            <p class="text">商家公告</p>
            <p class="line"></p>
          </div>
          <p class="detail-bulletin">{{ seller.bulletin }}</p>
        </div>
        <div class="detail-close">
          <i
            class="icon-close"
            @click="closeDetail"
          ></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Star from '../star/Star'
export default {
  data() {
    return {
      detailShow: false,
      classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    }
  },
  props: {
    seller: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  created() {
    setTimeout(() => {
      console.log(this.seller)
    }, 20)
  },
  methods: {
    openDetail() {
      this.detailShow = true
    },
    closeDetail() {
      this.detailShow = false
    }
  },
  components: {
    Star
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~@/assets/stylus/mixin.styl';

.header {
  height: 100%;
  position: relative;

  // 头部盒子
  .header-box {
    position: relative;
    overflow: hidden;
    color: #fff;
    background: rgba(7, 17, 27, 0.5);

    .content-wrapper {
      position: relative;
      box-sizing: border-box;
      height: 106px;
      padding: 24px 12px 18px 24px;

      // logo图
      .avatar {
        width: 64px;
        height: 64px;
        float: left;

        img {
          width: 100%;
          height: 100%;
        }
      }

      // 介绍
      .content {
        overflow: hidden;
        padding-left: 15px;

        .title {
          display: flex;
          margin-bottom: 10px;

          .brand {
            width: 30px;
            height: 18px;
            bg-image('brand');
            background-size: 100% 100%;
            margin-right: 5px;
          }

          .name {
            font-size: 16px;
            line-height: 20px;
            font-weight: bold;
          }
        }

        .description {
          font-size: 12px;
          line-height: 12px;
          margin-bottom: 10px;
        }

        .support {
          position: relative;
          padding-left: 15px;
          font-size: 12px;
          line-height: 12px;

          &::before {
            position: absolute;
            left: 0;
            content: '';
            width: 12px;
            height: 12px;
            bg-image('decrease_1');
            background-size: 100% 100%;
          }
        }
      }

      .support-count {
        position: absolute;
        right: 12px;
        bottom: 14px;
        padding: 0 8px;
        height: 24px;
        line-height: 24px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 14px;
        text-align: center;

        .count {
          vertical-align: top;
          font-size: 12px;
        }

        .icon-keyboard_arrow_right {
          font-size: 12px;
          line-height: 24px;
          margin-left: -3px;
        }
      }
    }

    // 公告
    .bulletin-wrapper {
      position: relative;
      height: 28px;
      line-height: 28px;
      background: rgba(7, 17, 27, 0.2);
      padding: 0px 22px 0px 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      .bulletin-title {
        display: inline-block;
        vertical-align: top;
        margin-top: 8px;
        width: 22px;
        height: 12px;
        bg-image('bulletin');
        background-size: 100% 100%;
      }

      .bulletin-text {
        font-size: 12px;
        vertical-align: top;
        margin: 0 4px;
        line-height: 28px;
      }

      .icon-keyboard_arrow_right {
        position: absolute;
        right: 12px;
        font-size: 12px;
        top: 8px;
      }
    }

    // 背景图
    .background {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      filter: blur(10px);

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  // 详情
  .detail {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(7, 17, 27, 0.8);
    color: #fff;

    .detail-wrapper {
      padding: 64px 10%;

      // 详情名
      .detail-name {
        text-align: center;
        font-weight: bold;
      }

      // 详情标题
      .detail-title {
        padding: 28px 0;
        display: flex;

        .line {
          flex: 1;
          height: 1px;
          background-color: rgba(255, 255, 255, 0.2);
          position: relative;
          top: 5px;
        }

        .text {
          font-size: 14px;
          font-weight: bold;
          text-align: center;
          padding: 0 10px;
        }
      }

      // 详情优惠信息
      .detail-supports {
        li {
          padding-left: 12px;
          margin-bottom: 12px;

          .icon {
            display: inline-block;
            vertical-align: top;
            width: 16px;
            height: 16px;
            background-size: 100% 100%;
            margin-right: 5px;

            &.decrease {
              bg-image('decrease_2');
            }

            &.discount {
              bg-image('discount_2');
            }

            &.special {
              bg-image('special_2');
            }

            &.invoice {
              bg-image('invoice_2');
            }

            &.guarantee {
              bg-image('guarantee_2');
            }
          }

          .text {
            font-size: 12px;
          }
        }
      }

      // 详情商家公告
      .detail-bulletin {
        font-size: 12px;
        padding: 0 12px;
        line-height: 24px;
      }
    }

    // 关闭详情
    .detail-close {
      position: absolute;
      bottom: 30px;
      left: 50%;
      font-size: 32px;
      transform: translateX(-50%);
    }
  }
}
</style>
