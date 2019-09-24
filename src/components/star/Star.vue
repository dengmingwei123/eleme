<template>
  <div class="star">
    <div class="star-wrapper clearfix">
      <span
        class="star-item"
        v-for="(item,index) in setScoreStar"
        :key="index"
        :class="item"
      ></span>
    </div>
  </div>
</template>

<script>
const HALF = 'half'
const ON = 'on'
const OFF = 'off'
export default {
  data() {
    return {
    }
  },
  props: {
    score: {
      type: Number
    }
  },
  computed: {
    setScoreStar() {
      let arr = []
      let score = Math.floor(this.score)
      for (let i = 1; i <= score; i++) {
        arr.push(ON)
      }
      if (this.result - score === 0.5) {
        arr.push(HALF)
      } else if (this.result - score > 0.5) {
        arr.push(ON)
      } else {
        arr.push(OFF)
      }
      return arr
    }
  }
}
</script>

<style lang="stylus" res="stylesheet/stylus">
@import '~@/assets/stylus/mixin.styl';

.star {
  .star-wrapper {
    width: 100%;
    text-align: center;
    margin-top: 20px;

    .star-item {
      display: inline-block;
      vertical-align: top;
      width: 20px;
      height: 20px;
      background-size: 100% 100%;
      margin: 0 9px;

      &.half {
        bg-image('star48_half');
      }

      &.on {
        bg-image('star48_on');
      }

      &.off {
        bg-image('star48_off');
      }
    }
  }
}
</style>
