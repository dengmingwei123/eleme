<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
  </div>
</template>

<script>
import VHeader from './components/header/Header'
const ERR_OK = 0
export default {
  data() {
    return {
      seller: {}
    }
  },
  created() {
    this._getSeller()
  },
  methods: {
    async _getSeller() {
      let res = await this.axios.get('/api/seller')
      let { errno, data } = res.data
      if (errno === ERR_OK) {
        this.seller = data
      }
    }
  },
  components: {
    VHeader
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
html, body {
  width: 100%;
  height: 100%;
}

#app {
  height: 100%;
  width: 100%;
}
</style>
