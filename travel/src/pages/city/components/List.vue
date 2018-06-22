<template lang="html">
  <div class="list" ref='wrapper'>
    <div>
      <div class="area">
        <div class="title border-topbottom">
          附近城市
        </div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">
          热门城市
        </div>
        <div class="button-list">
          <div class="button-wrapper" v-for="(item,index) of hotCitiesList" :key="item.id" @click="handleCityCity(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>

      <div
        class="area"
        v-for="(item,key) of citiesList"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">
          {{key}}
        </div>
        <div class="list-con">
          <div class="list-item border-bottom" v-for="(city,index) of item" :key="city.id" @click="handleCityCity(city.name)">{{city.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
export default {
  name:'CityList',
  props:{
    hotCitiesList:Array,
    citiesList:Object,
    letter:String
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  methods:{
    handleCityCity (city) {
      this.$store.commit('changeCity',city)
      this.$router.push('/')
    }
  },
  mounted:function(){
    console.log(mapState)
  },
  computed: {
    ...mapState(['city'])
  },
  watch:{
    letter () {
      console.log(this.letter)
      const element = this.$refs[this.letter][0]
      if(this.letter){
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    .border-topbottom
      &:before
        border-color: #ccc
      &:after
        border-color: #ccc
    .area
      .title
        color: #666
        background: #eee
        padding-left: .2rem
        line-height: .54rem
        font-size: .22rem
      .button-list
        overflow: hidden
        padding: .1rem .6rem .1rem .1rem
        .button-wrapper
          float: left
          width:33.33%
          .button
            margin: .1rem
            padding: .1rem
            text-align: center
            border: solid .02rem #ccc
            border-radius: .06rem
            color: #333
      .list-con
        .list-item
          line-height: .76rem
          color: #666
          padding-left: .2rem
          padding-right: .4rem
        .border-bottom
          &:before
            border-color: #ccc
</style>
