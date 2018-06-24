<template lang="html">
  <div class="">
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1603/fb/fb925132e196da9c90.water.jpg_600x330_f686f3d6.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">东方明珠(AAAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont">&#59026;</span>
          30
        </div>
      </div>
    </div>
    
    <common-gallary :imgs="imgs" v-show="gallaryShow" @close="handleGallaryClose"></common-gallary>
      
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name:'DetailBanner',
  components:{
    CommonGallary
  },
  data (){
    return {
      imgs:['http://img1.qunarzz.com/sight/p0/1603/fb/fb925132e196da9c90.water.jpg_r_800x800_5cb5ddc8.jpg','http://img1.qunarzz.com/sight/p0/1603/fb/fb925132e196da9c90.water.jpg_r_800x800_5cb5ddc8.jpg'],
      gallaryShow:false
      
    }
  },
  methods: {
    handleBannerClick () {
      this.gallaryShow = true;
    },
    handleGallaryClose(){
      console.log(12)
      this.gallaryShow = false;
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    overflow: hidden
    height: 0
    padding-bottom: 55%
    position: relative
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      bottom: 0
      left: 0
      right: 0
      display: flex
      color: #fff
      line-height: .6rem
      background-image: linear-gradient(top,rgba(0, 0, 0, 0),rgba(0, 0, 0, 0.8));
      .banner-title
        flex: 1
        font-size: .32rem
        padding-left: .2rem
      .banner-number
        margin-top: .14rem
        padding: 0 .2rem
        height: .32rem
        font-size: .24rem
        line-height: .32rem
        border-radius: .2rem 0 0 .2rem
        background: rgba(0,0,0,.8)
        .iconfont
          font-size: .24rem
</style>
