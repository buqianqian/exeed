<template>
  <div class="home">
    <div ref="aa" style="margin-top: -20px" @mouseenter="scrollEvent">
      <Banner class="banner1"></Banner>
      <Tab class="tab1"></Tab>
    </div>
    <!-- <div class="scroll"></div> -->
    <!-- <Main></Main> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Banner from '@/components/Banner.vue'
import Tab from '@/components/Tab.vue'
// import Main from '@/components/Main.vue'

export default {
  name: 'home',
  components: {
    Banner,
    // HelloWorld,
    Tab
    // Main
  },
  mounted () {
    console.log(this.$refs.aa)
    this.$refs.aa.addEventListener('scroll', this.handleScroll)
    console.log(this.$refs.aa.getBoundingClientRect().top)
  },
  methods: {
    handleScroll () {
      // var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      console.log(111)
    },
    scrollEvent (e) {
      console.log(e.target)
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

  .scroll {
  }
}
</style>
