<template lang="html">
  <div class="recommend">
    <div class="title">
      猜你喜欢
    </div>
    <div class="con">
      <div class="item" v-for="(item,index) of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <h4 class="item-title">{{item.title}}</h4>
          <p class="item-desc">{{item.desc}}</p>
          <button type="button" name="button" class="btn">查看详情</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
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
      padding:.1rem
    .con
      .item
        display: flex
        padding: .1rem
        .item-img
          flex: 0 0 1.7rem
          width: 1.7rem
          height: 1.7rem
        .item-info
          flex: 1
          min-width: 0
          margin-left: .2rem
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
            margin-top: .1rem
            color: #999
            ellipsis()
          .btn
            line-height: .44rem
            margin-top: .16rem
            padding: 0 .2rem
            border-radius: .06rem
            background: #ff9300
            color: #fff
</style>
