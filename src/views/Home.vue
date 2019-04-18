<template>
  <div style="overflow-x： hidden">
      <!-- :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" @bottom-status-change="handleBottomChange" -->
      <div class="home" ref="aa">
        <transition name="fade">
          <div class="tab fixOnTop" v-show="isShow" transtion="fade">
            <span class="left" @click="cur=0">
              <i :class="{active:cur==0}">Say YES合集</i>
            </span>
            <span class="right"  @click="cur=1">
              <i :class="{active:cur==1}">新闻中心</i>
            </span>
          </div>
        </transition>
        <div ref="wrapper" :style="{ height: wrapperHeight + 'px'}" style="overflow: hidden; width: 100%;height:100%; right: 0;bottom: 0;z-index:1">
          <mt-loadmore :bottomDistance="20" ref="loadmore" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" @bottom-status-change="handleBottomChange">
            <Banner class="banner1" :class="isShow?'hideBan': ''" ref="bb"></Banner>
            <div>
              <div class="tab">
                <span class="left" @click="cur=0">
                  <i :class="{active:cur==0}">Say YES合集</i>
                </span>
                <span class="right"  @click="cur=1">
                  <i :class="{active:cur==1}">新闻中心</i>
                </span>
              </div>
              <component :is="componentArr[cur]"></component>
            </div>
          </mt-loadmore>
        </div>
      </div>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import Tab from '@/components/Tab.vue'
import BScroll from 'better-scroll'
import Sayyes from '@/components/Sayyes.vue'
import News from '@/components/News.vue'

export default {
  name: 'home',
  components: {
    Banner,
    Tab,
    Sayyes,
    News
  },
  data () {
    return {
      wrapperHeight: 0,
      isBottom: false,
      isShow: false,
      allLoaded: false,
      height: 0,
      cur: 0,
      componentArr: ['Sayyes', 'News']
    }
  },
  mounted () {
    setTimeout(() => {
      this.wrapperHeight =
        document.documentElement.clientHeight -
        this.$refs.wrapper.getBoundingClientRect().top
    }, 200)
    // this.$refs.aa.addEventListener('scroll', () => {
    //   console.log(this.$refs.aa.scrollTop)
    //   console.log(document.getElementsByClassName('banner1')[0].clientHeight)
    //   if (this.$refs.aa.scrollTop >= 270 / 667 * this.height) {
    //     this.isShow = true
    //   } else {
    //     this.isShow = false
    //   }
    // }, false)
    // console.log(document.getElementsByClassName('mint-loadmore')[0].clientHeight)
    this.$nextTick(() => {
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: 3,
        useTransition: false,
        scrollY: true,
        bounce: true,
        momentumLimitDistance: 5
      })
      this.scroll.on('scroll', (pos) => {
        console.log(pos)
        if (pos.y <= -210 / 667 * this.height) {
          console.log(11)
          console.log(this.isShow)
          this.isShow = true
        } else {
          this.isShow = false
        }
      })
      this.scroll.refresh()
      alert(1)
    })
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
.tab {
  width: 100%;
  height: .8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  // position: fixed;
  // left: 0;
  // top: 48vw;
  font-weight: 500;
  color: #c38a6e;
  .left, .right {
    width: 50%;
    line-height: .8rem;
    font-size: .32rem;

    i {
      display: block;
      width: 2rem;
      height: .8rem;
      font-style: normal;
      text-align: center;
      border-bottom: .05rem solid transparent;
      box-sizing: border-box;
      margin-left: auto;
      margin-right: auto;
      cursor: pointer;
    }

    .active {
      border-bottom: .05rem solid #c38a6e;
    }
  }
  .fixOnTop {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
}
.hideBan {
  margin-top: calc(-40 /667*100vh);
}
.fade-enter-active {
      transition: opacity 2s
}
.fade-enter, .fade-leave-active {
      opacity: 0
}
</style>
