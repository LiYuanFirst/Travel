<template lang="html">
  <div class="">
    <div class="list" v-for="(item,index) of list" :key="index">
      <div class="con">
        <span class="icon"></span>
        {{item.title}}
      </div>
      <div class="content" v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"DetailList",
  props:{
    list:Array
  }
}
</script>

<style lang="stylus" scoped>
.con
  overflow: hidden
  position: relative
  z-index: 4
  padding: 0 .2rem
  background: #fff
  color: #333
  font-size: .32rem
  line-height: .88rem
  text-indent: .4rem
  &:before
    position: absolute
    content: ''
    left: .2rem
    bottom: 0
    border-bottom: .01rem solid #e0e0e0
    width: 100%
    height: 0
    border-color: #ededed
  .icon
    display: inline-block
    position: absolute
    width: .36rem
    height: .36rem
    top: .26rem
    left: .2rem
    background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem
.content
  padding-left: .32rem
</style>
