<template lang="html">
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name:'HomeHeader',
  props:{
    city:String
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display:flex
    height:.86rem
    background-color: $bgColor
    color: #fff
    line-height: .86rem
    text-align: center
    .header-left
      flex: 0 0 .64rem
      width:.64rem
    .header-input
      flex: 1
      height: .62rem
      line-height: .62rem
      background: #fff
      border-radius: .06rem
      margin-top: .12rem
      color:#999
      text-align: left
      padding: 0 .1rem
    .header-right
      flex: 0 0 1.24rem
      color: #fff
      font-size: .28rem
      text-align: center
</style>
