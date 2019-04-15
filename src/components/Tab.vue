<template>
  <div>
    <div class="tab" ref="tab">
      <span class="left" @click="cur=0">
        <i :class="{active:cur==0}">Say YES合集</i>
      </span>
      <span class="right"  @click="cur=1">
        <i :class="{active:cur==1}">新闻中心</i>
      </span>
    </div>
    <component :is="componentArr[cur]"></component>
  </div>
</template>

<script>
import Sayyes from '@/components/Sayyes.vue'
import News from '@/components/News.vue'
export default {
  components: {
    Sayyes,
    News
  },
  data () {
    return {
      cur: 0,
      componentArr: ['Sayyes', 'News']
    }
  }
}
</script>

<style lang="less" scoped>
.tab {
  width: 100%;
  height: .77rem;
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
    line-height: .77rem;
    font-size: .26rem;

    i {
      display: block;
      width: 1.8rem;
      font-style: normal;
      text-align: center;
      border-bottom: .03rem solid #fff;
      margin-left: auto;
      margin-right: auto;
      cursor: pointer;
    }

    .active {
      border-bottom: 3px solid #c38a6e;
    }
  }
  // .left {
  //   display: inline-block;
  //   width: 1.44rem;
  //   height: 100%;

  //   text-align: center;
  //   margin: 0 13vw;
  //   border: 0.4vw solid transparent;
  //   box-sizing: border-box;
  //   overflow: hidden;
  // }
  // .right {
  //   display: inline-block;
  //   width: 17vw;
  //   height: 100%;
  //   line-height: 10vw;
  //   font-size: .26rem;
  //   text-align: center;
  //   margin: 0 14vw;
  //   border: 0.4vw solid transparent;
  //   box-sizing: border-box;
  //   overflow: hidden;
  // }

}
</style>
