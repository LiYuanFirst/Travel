<template lang="html">
  <div class="header">
    <router-link to="/" class="back1" v-show="showHeader">
      <span class="iconfont">&#xe624;</span>
    </router-link>
    <div class="header-con"  v-show="!showHeader" :style="opacityStyle">
      <router-link to="/" class="back">
        <span class="iconfont">&#xe624;</span>
      </router-link>
      <div class="text">
        景点名称
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name:"DetailHeader",
  data(){
    return {
      showHeader : true,
      opacityStyle:{
        opacity:0
      }
    }
  },
  methods:{
    handleScroll(){
      //获取scrollTop兼容写法
      const top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      if(top>60){
        let opacity = top/140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}
        this.showHeader = false
      }else{
        this.showHeader = true
      }
    }
  },
  activated(){
    window.addEventListener('scroll',this.handleScroll)
  },
  deactivated(){
    window.removeEventListener('scroll',this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position: fixed
    top: 0
    left: 0
    right: 0
    height: .86rem
    z-index: 1
    text-align: center
    .back1
      position: absolute
      top: 0
      left: 0
      width: .72rem
      height: .72rem
      line-height: .72rem
      margin: .07rem
      border-radius: 50%
      color: #fff
      font-weight: bold
      background-color: rgba(0,0,0,.6)
    .header-con
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      line-height: .86rem
      background:$bgColor
      color: #fff
      .back
        position: absolute
        top: 0
        left: 0
        width: .72rem
        height: .72rem
        line-height: .72rem
        margin: .07rem
        
      
    
  
</style>
