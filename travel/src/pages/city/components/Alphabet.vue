<template lang="html">
  <div class="list">
    <div
      class="item"
      v-for="(item,key) of citiesList"
      :key="key"
      @click="handleLetterClick"
    >{{key}}</div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'CityAlphabet',
  props:{
    citiesList:Object
  },
  methods:{
    handleLetterClick (e) {
      this.$emit('change',e.target.innerText)
    }
  },
  mounted () {

  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    display: flex
    flex-direction: column
    justify-content: center
    text-align: center
    width: .4rem
    .item
      color: $bgColor
      line-height: .4rem
      text-align: center


</style>
