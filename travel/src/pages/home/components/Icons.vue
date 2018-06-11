<template lang="html">
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="(item,index2) of page" :key="index2">
          <div class="icon-img">
            <img class="img" :src="item.imgUrl" alt="">
          </div>
          <p class="des" v-text="item.desc"></p>
        </div>

      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>


  </div>
</template>

<script>
export default {
  name:'HomeIcon',
  props:{
    list:Array
  },
  data () {
    return{
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed:{
    pages () {
      const pages = []
      this.list.forEach((item,index) => {
        const page = Math.floor(index/8)
        if(!pages[page]){
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }

}

</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .icons >>> .swiper-container
    padding-bottom: .28rem
    .swiper-pagination-bullets
      bottom: 0
  .icons
    padding-top: .1rem
    overflow: hidden
    .icon
      width: 25%
      float: left
      position: relative
      height: 0
      padding-bottom: 25%
      overflow: hidden
      .icon-img
        font-size: 0
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        // box-sizing: border-box
        padding: .1rem
        img
          display: block
          height: 100%
          margin: 0 auto
      .des
        position: absolute
        bottom: 0
        line-height: .44rem
        height: .44rem
        color: #333
        width: 100%
        text-align: center
        ellipsis()


</style>
