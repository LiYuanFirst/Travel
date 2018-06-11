<template lang="html">
  <div class="recommend">
    <div class="title">
      周末去哪儿
    </div>
    <div class="con">
      <div class="item" v-for="(item,index) of list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <h4 class="item-title">{{item.title}}</h4>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props:{
    list:Array
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .recommend
    border-top: solid .12rem #efefef
    .title
      height: .44rem
      line-height: .44rem
      font-size: .32rem
      color: #212121
      padding:.1rem .1rem .2rem
    .con
      .item
        .item-img-wrapper
          overflow: hidden
          height: 0
          padding-bottom: 37.09%
          .item-img
            width: 100%
        .item-info
          min-width: 0
          padding: 0 .1rem .2rem
          padding-bottom: .2rem
          .item-title
            height: .54rem
            line-height: .54rem
            font-size: .32rem
            color: #333
            ellipsis()
          .item-desc
            height: .4rem
            line-height: .4rem
            font-size: .28rem
            margin-top: .06rem
            color: #999
            ellipsis()

</style>
