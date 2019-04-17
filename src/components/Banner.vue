<template>
  <div>
    <div class="banner">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item, index) in items" :key="index">
          <img :src="item" class="index_img">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <!-- <div class="shade"></div> -->
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
require('swiper/dist/css/swiper.css')

export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      items: ['https://ivgcdn.jiangfei.net/flow/img/1.png', 'https://ivgcdn.jiangfei.net/flow/img/2.png'],
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        },
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        onSlideChangeEnd: swiper => {
          this.page = swiper.realIndex + 1
          this.index = swiper.realIndex
        }
      },
      swiperSlides: [1, 2, 3, 4, 5]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
.banner {
  width: 100%;
  min-height: 3.5rem;
  height: 50vw;
  // position: fixed;
  // left: 0;
  // right: 0;
  // z-index: 2;
  background-color: #F2F5F7;
  overflow: hidden;
  img {
    width: 100%;
  }
}
.shade {
  width: 100%;
  height: 48vw;
  // position: fixed;
  // left: 0;
  // right: 0;
  // z-index: 1;
  overflow: hidden;
  background-color: #fff;
}
</style>
