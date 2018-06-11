<template lang="html">
  <div class="header">
      选择城市
    <router-link to="/">
      <span class="iconfont">&#xe624;</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name:'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    height: .86rem
    line-height: .86rem
    text-align: center
    font-size: .32rem
    overflow: hidden
    background-color: $bgColor
    position: relative
    color: #fff
    .iconfont
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      height: .86rem
      line-height: .86rem
      color: #fff
</style>
