<template>
  <div class="main">
    <!-- <div class="top"></div> -->
      <!-- <div id="content" ref="wrapper" :style="{height: wrapperHeight + 'px'}"> -->
         <!-- :style="{height: wrapperHeight + 'px'}" -->
        <template>
          <!-- <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="true" ref="loadmore" @bottom-status-change="handleBottomChange"> -->
            <ul>
              <li v-for="(item, index) in list" :key="index">
                <a :href="item.link" class="list" target="blank">
                  <p class="title">{{item.title}}</p>
                  <p class="time">{{item.time}}</p>
                  <img v-lazy="item.src" style="width: 100%; margin-top: 4.2vw">
                </a>
              </li>
            </ul>
            <div class="no" v-show="isBottom" style="text-align: center; font-size: 2.4vw; color: #333; height: 4vw; line-height: 4vw">已经到底啦</div>
          <!-- </mt-loadmore> -->
        </template>
      <!-- </div> -->
  </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  components: {
  },
  data () {
    return {
      isBottom: false,
      wrapperHeight: 0,
      isShow: false,
      allLoaded: false,
      list: []
    }
  },
  methods: {
    // init () {
    //   this.wrapperHeight =
    //     document.documentElement.clientHeight -
    //     this.$refs.wrapper.getBoundingClientRect().top
    // },
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
    loadTop () {
      this.$refs.loadmore.onTopLoaded()
    },
    loadBottom () {
      this.$refs.loadmore.onBottomLoaded()
      this.getList()
      this.allLoaded = true
    },
    getList () {
      console.log(222)
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.init()
    // }, 200)
  },
  created () {
    this.list = [{
      src: 'https://ivgcdn.jiangfei.net/flow/img/img1.png',
      title: '靠谱小伙伴上线 | 我为EXEED星途 Say YES！',
      time: '2019-03-19',
      link: 'https://mp.weixin.qq.com/s/JlQQA1wNhNzb-ozpZM9P6w'
    },
    {
      src: 'https://ivgcdn.jiangfei.net/flow/img/img2.png',
      title: '遇见最强大脑 | 请为EXEED星途的智能科技Say YES',
      time: '2019-03-13',
      link: 'https://mp.weixin.qq.com/s/isiTTZ6QtDvM8wd6WAvLxg'
    },
    {
      src: 'https://ivgcdn.jiangfei.net/flow/img/img3.png',
      title: '相信时间的选择 | 请为EXEED星途Say YES',
      time: '2019-02-20',
      link: 'https://mp.weixin.qq.com/s/7F9C8wqbdBpwi5ThIQ83Pg'
    },
    {
      src: 'https://ivgcdn.jiangfei.net/flow/img/img4.png',
      title: '为0.1毫米患上“强迫症”| 请为EXEED星途匠心制造Say YES',
      time: '2019-02-02',
      link: 'https://mp.weixin.qq.com/s/5-Lo4XnHKh5SUSiCY0yKwA'
    },
    {
      src: 'https://ivgcdn.jiangfei.net/flow/img/img5.png',
      title: '倾听心跳的声音 | 请为EXEED星途澎湃动力Say YES',
      time: '2019-01-11',
      link: 'https://mp.weixin.qq.com/s/tJNv5X19-mji1N2vQLbq5w'
    }
    ]
  }
}
</script>

<style lang="less">
#content {
  overflow-y: scroll;
}
.top {
  width: 100%;
  height: 58vw;
}
ul {
  margin-top: 0.7vw;
}
.main {
  width: 100%;
  // height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
  .list {
    display: block;
    background-color: #fff;
    text-decoration: none;
    padding: 5.47vw 3.73vw;
    margin-bottom: 0.7vw;
    .title {
      font-size: .32rem;
      font-weight: 700;
      font-stretch: normal;
      color: #2e2e2e;
      font-family: SourceHanSansCN-Medium;
      line-height: 110%;
    }
    .time {
      font-size: .24rem;
      margin-top: 2.67vw;
      color: #989898;
    }
  }
}
ul li {
  list-style: none;
}

.pullDown{
position: absolute;
left: 0;
width: 100%;
text-align: center;

p{
  font-size: 14px;
  padding: 20px 0;
  width: 100%;
}
}

.moveUpAnimate{
transition: 200ms ease all;
-webkit-transition: 200ms ease all;
}

</style>
