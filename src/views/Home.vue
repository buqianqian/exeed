<template>
  <div style="overflow-x： hidden">
      <!-- :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" @bottom-status-change="handleBottomChange" -->
      <div class="home" ref="aa">
        <div ref="wrapper" :style="{ height: wrapperHeight + 'px'}">
          <mt-loadmore :top-method="loadTop" :bottomDistance="0" :topDistance="0" ref="loadmore" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" @bottom-status-change="handleBottomChange">
            <Banner class="banner1" ref="bb" :class="isShow?'fix1': ''"></Banner>
            <Tab class="tab1" :totab="isShow"></Tab>
          </mt-loadmore>
        </div>
      </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import Tab from '@/components/Tab.vue'

export default {
  name: 'home',
  components: {
    Banner,
    Tab
  },
  data () {
    return {
      wrapperHeight: 0,
      isBottom: false,
      isShow: false,
      allLoaded: false,
      height: 0
    }
  },
  mounted () {
    setTimeout(() => {
      this.wrapperHeight =
        document.documentElement.clientHeight -
        this.$refs.wrapper.getBoundingClientRect().top
    }, 200)
    this.$refs.aa.addEventListener('scroll', () => {
      // console.log(this.$refs.aa.scrollTop)
      if (this.$refs.aa.scrollTop >= 120 / 667 * this.height) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    }, false)
    // console.log(document.getElementsByClassName('mint-loadmore')[0].clientHeight)
    // this.$nextTick(() => {
    //   this.scroll = new BScroll(this.$refs.wrapper, {})
    //   alert(1)
    // })
    this.getFixPosition()
  },
  methods: {
    loadTop () {
      // console.log(1111)
      this.$refs.loadmore.onTopLoaded()
      this.$refs.aa.scrollTop = 0
    },
    loadBottom () {
      this.$refs.loadmore.onBottomLoaded()
      this.allLoaded = true
      console.log(111111)
      // this.axios.get('').then((res) => {
      //   console.log(res)
      // })
    },
    handleBottomChange () {
      this.isBottom = false
      var that = this
      if (this.allLoaded === true) {
        this.isBottom = true
        setTimeout(function () {
          that.isBottom = false
        }, 2000)
      }
      this.allLoaded = false
    },
    getFixPosition () {
      this.height = document.body.clientHeight
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: scroll;
}
.fix1 {
  position: fixed;
  top: calc(-120 /667*100vh);
  left: 0;
}
</style>
