<template lang="html">
  <div class="">
    <detail-header></detail-header>
    <detail-banner></detail-banner>
    <div class="" style="height:50rem;">
      
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  name:'Detail',
  components:{
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="css">
</style>
