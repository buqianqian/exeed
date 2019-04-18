<template>
  <div class="main">
    <!-- <div class="top"></div> -->
      <!-- <div id="content" ref="wrapper" :style="{ height: wrapperHeight + 'px'}" style="overflow-x： hidden"> -->
        <template>
          <!-- <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore" @bottom-status-change="handleBottomChange"> -->
            <ul>
              <li v-for="(item, index) in list" :key="index">
                <a :href="item.link" class="list" target="_blank">
                  <p class="title">{{item.title}}</p>
                  <p class="time">{{item.time}}</p>
                  <img v-lazy="item.src" style="width: 100%; margin-top: 4.2vw">
                </a>
              </li>
            </ul>
            <!-- <div class="no" v-show="isBottom" style="text-align: center; font-size: 2.4vw; color: #333; height: 4vw; line-height: 4vw">已经到底啦</div> -->
          <!-- </mt-loadmore> -->
        </template>
      <!-- </div> -->
  </div>
</template>

<script>
// import { setTimeout } from 'timers'
export default {
  components: {
  },
  data () {
    return {
      // isBottom: false,
      // wrapperHeight: 0,
      isShow: false,
      // allLoaded: false,
      list: []
    }
  },
  methods: {
    // handleBottomChange () {
    //   this.isBottom = false
    //   var that = this
    //   if (this.allLoaded === true) {
    //     this.isBottom = true
    //     setTimeout(function () {
    //       that.isBottom = false
    //     }, 2000)
    //   }
    //   this.allLoaded = false
    // },
    // loadTop () {
    //   console.log(1111)
    //   this.$refs.loadmore.onTopLoaded()
    // },
    // loadBottom () {
    //   this.$refs.loadmore.onBottomLoaded()
    //   this.getList()
    //   this.allLoaded = true
    // },
    getList () {
      console.log(2222)
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.wrapperHeight =
    //     document.documentElement.clientHeight -
    //     this.$refs.wrapper.getBoundingClientRect().top
    //   console.log(this.wrapperHeight)
    // }, 200)
  },
  created () {
    this.list = [{
      src: 'https://ivgcdn.jiangfei.net/flow/img/img_new_1.png',
      title: '地表最强1.6T、全球首款刷脸支付！新高端EXEED星途TXL/TX（四驱） 预售开启',
      time: '2019-03-28',
      link: 'https://www.exeedcars.com/news/exeed/20190328'
    },
    {
      src: 'https://ivgcdn.jiangfei.net/flow/img/img_new_2.png',
      title: 'EXEED星途雄狮智云2.0系统   |   打造全新智能出行体验',
      time: '2019-03-08',
      link: 'https://www.exeedcars.com/news/exeed/20190325'
    },
    {
      src: 'https://ivgcdn.jiangfei.net/flow/img/img_new_3.png',
      title: 'TX正式量产下线   |   EXEED星途剑指中国新高端',
      time: '2019-01-24',
      link: 'https://www.exeedcars.com/news/exeed/20190124'
    },
    {
      src: 'https://ivgcdn.jiangfei.net/flow/img/img_new_4.png',
      title: '冰雪寒潮中的坚强舞者   |   EXEED星途TX黑河极寒测试彰显硬实力',
      time: '2019-01-01',
      link: 'https://www.exeedcars.com/news/exeed/20180101'
    },
    {
      src: 'https://ivgcdn.jiangfei.net/flow/img/img_new_5.png',
      title: '撬动市场格局的1.6TGD   |   发动机强势登场 EXEED“星”途可期',
      time: '2018-12-10',
      link: 'https://www.exeedcars.com/news/exeed/20181210'
    },
    {
      src: 'https://ivgcdn.jiangfei.net/flow/img/img_new_6.png',
      title: 'EXEED中文名公布 |“星途”开启超越之路',
      time: '2018-11-10',
      link: 'https://www.exeedcars.com/news/exeed/20181110'
    },
    {
      src: 'https://ivgcdn.jiangfei.net/flow/img/img_new_7.png',
      title: '智能新高端EXEED即将亮相 ——全球首款百度Apollo小度车载OS量产车型曝光',
      time: '2018-11-02',
      link: 'https://www.exeedcars.com/news/exeed/20181102'
    }
    ]
  }
}
</script>

<style lang="less" scoped>
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
