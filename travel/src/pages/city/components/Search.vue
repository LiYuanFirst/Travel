<template lang="html">
  <div class="search">
    <input class="search-input" type="text" name="" value="" placeholder="输入城市/景点/游玩主题">
  </div>
</template>

<script>
export default {
  name:'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    background: $bgColor
    height: .72rem
    padding: 0 .1rem
    .search-input
      height: .62rem
      line-height: .62rem
      width: 100%
      background: #fff
      color: #666
      text-align: center
      padding: 0 .1rem
      box-sizing: border-box
      border-radius: .06rem
</style>
