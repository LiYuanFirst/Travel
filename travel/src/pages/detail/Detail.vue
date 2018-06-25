<template lang="html">
  <div class="">
    <detail-header :sightname= "sightName"></detail-header>
    <detail-banner :bannerImg="bannerImg" :sightName= "sightName" :gallaryImgs="gallaryImgs"></detail-banner>
    <div class="content" style="height:20rem">
      <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name:'Detail',
  components:{
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName:'',
      bannerImg:'',
      gallaryImgs:[],
      categoryList: []
    }
  },
  methods:{
    getDetailInfo () {
      axios.get('/api/detail.json',{
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDataSucc)
    },
    getDataSucc(res){
      res = res.data
      console.log(res)
      if(res.ret && res.data){
        this.sightName = res.data.sightName
        this.bannerImg = res.data.bannerImg
        this.gallaryImgs = res.data.gallaryImgs
        this.categoryList = res.data.categoryList

      }
    }
  },
  mounted(){
    this.getDetailInfo()
  }
}
</script>

<style lang="css">
</style>
