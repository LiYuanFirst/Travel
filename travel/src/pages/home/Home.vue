<template lang="html">
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icon :list="iconsList"></home-icon>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
export default {
  name:"Home",
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {

      swiperList:[],
      iconsList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if(res.ret && res.data) {
        const data = res.data;
        this.swiperList = data.swiperList
        this.iconsList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted(){
    this.getHomeInfo()
  }
}
</script>

<style lang="css">
</style>
