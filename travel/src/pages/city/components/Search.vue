<template lang="html">
  <div class="">
    <div class="search">
      <input class="search-input" type="text" name="" v-model="keyword" placeholder="输入城市/景点/游玩主题">
    </div>
    <div class="search-result" ref="wrapper" v-show="keyword">
      <div class="list">
        <div class="item border-bottom" v-for="item of list" :key="item.id" @click="handleCityCity(item.name)">{{item.name}}</div>
        <div class="item border-bottom" v-show="noData">
          暂无匹配项
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'CitySearch',
  props:{
    cities:Object
  },
  data () {
    return {
      keyword:'',
      list:[],
      timer:null

    }
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
  watch: {
      keyword () {
        if(this.timer){
          clearTimeout(this.timer)
        }
        if(!this.keyword){
          this.list = []
          return
        }
        this.timer = setTimeout(() => {
          const result = []
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1){
                result.push(value)
              }
            })
          }
          this.list = result
        },100)
      }
  },
  computed: {
    noData () {
      return !this.list.length
    }
  }
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
      padding: 0 .1rem
      line-height: .42rem
      width: 100%
      background: #fff
      color: #666
      text-align: center
      padding: 0 .1rem
      box-sizing: border-box
      border-radius: .06rem
  .search-result
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    z-index: 2
    background: #fff
    color: #666
    overflow: hidden
    .list
      .item
        padding: 0 .2rem
        line-height: .58rem
</style>
