<template lang="html">
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="(item,index2) of page" :key="index2">
          <div class="icon-img">
            <img class="img" :src="item.src" alt="">
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
  data () {
    return{
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      iconsList:[
        {
          id:1,
          src:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
          desc:'景点门票'
        },
        {
          id:2,
          src:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
          desc:'一日游'
        },
        {
          id:3,
          src:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
          desc:'必游榜单'
        },
        {
          id:4,
          src:"http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
          desc:'动植物园'
        },
        {
          id:5,
          src:"http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png",
          desc:'踏青赏花'
        },
        {
          id:6,
          src:"http://img1.qunarzz.com/piao/fusion/1805/57/1e29afd06f881102.png",
          desc:'普陀山'
        },
        {
          id:7,
          src:"http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png",
          desc:'上海欢乐谷'
        },
        {
          id:1,
          src:"http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png",
          desc:'Q精选'
        },
        {
          id:1,
          src:"http://img1.qunarzz.com/piao/fusion/1803/de/f26be47a6bf02a02.png",
          desc:'上海迪士尼'
        }
      ]
    }
  },
  computed:{
    pages () {
      const pages = []
      this.iconsList.forEach((item,index) => {
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
