<template lang="html">
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
    123
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icons'
export default {
  name:"Home",
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcon
  }
}
</script>

<style lang="css">
</style>
