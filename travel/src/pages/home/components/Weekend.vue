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
      recommendList:[
        {
          id:1,
          title:'上海玛雅海滩水公园',
          desc:'上海玛雅海滩水公园上海玛雅海滩水公园',
          src:'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg'
        },{
          id:2,
          title:'上海迪士尼乐园',
          desc:'上海玛雅海滩水公园上海玛雅海滩水公园',
          src:'http://img1.qunarzz.com/sight/source/1603/ad/69b0fc5f48ad5f.jpg_r_640x214_b0fd5c7b.jpg'
        },{
          id:3,
          title:'上海玛雅海滩水公园',
          desc:'上海玛雅海滩水公园上海玛雅海滩水公园',
          src:'http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg'
        },{
          id:4,
          title:'上海玛雅海滩水公园',
          desc:'上海玛雅海滩水公园上海玛雅海滩水公园',
          src:'http://img1.qunarzz.com/sight/source/1505/7b/2a6b0ce087f0e5.jpg_r_640x214_5c76b115.jpg'
        }
      ]
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
        .item-img-wrapper
          overflow: hidden
          height: 0
          padding-bottom: 33.9%
          .item-img
            width: 100%
        .item-info
          min-width: 0
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
