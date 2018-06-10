<template lang="html">
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide>
        <img class="swiper-img" src="https://imgs.qunarzz.com/piao/fusion/1804/bd/8e4a1c3f470d3702.jpg_640x170_c1e8baeb.jpg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="swiper-img" src="https://imgs.qunarzz.com/piao/fusion/1804/5c/969bfa7af00a2702.jpg_640x170_ec465291.jpg" alt="">
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name:'HomeSwiper',
  data () {
    return {
      swiperOption: {
          pagination: '.swiper-pagination',
          loop:true,
          autoplay:5000
        }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    background: #eee
    padding-bottom: 26.56%
    .swiper-img
      width: 100%
</style>
