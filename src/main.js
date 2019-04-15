import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueSwiper from 'vue-awesome-swiper'
import vueWaterfallEasy from 'vue-waterfall-easy'
import 'swiper/dist/css/swiper.css'
import VueLazyLoad from 'vue-lazyload'
import { Loadmore, Spinner } from 'mint-ui'
import '@/assets/css/load.css'
import 'mint-ui/lib/style.css'

Vue.component(Loadmore.name, Loadmore)

Vue.component(Spinner.name, Spinner)

Vue.use(vueSwiper)
Vue.use(vueWaterfallEasy)
Vue.use(VueLazyLoad, {
  error: require('@/assets/timg.gif'),
  loading: require('@/assets/timg.gif'),
  preload: 1,
  attempt: 1,
  observe: true
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
