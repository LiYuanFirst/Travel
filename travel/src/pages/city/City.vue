<template lang="html">
  <div class="city">
    <city-header></city-header>
    <city-search :cities="citiesList"></city-search>
    <city-list :hotCitiesList="hotCitiesList" :citiesList="citiesList" :letter="letter"></city-list>
    <city-alphabet :citiesList="citiesList" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
  name:'City',
  components:{
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotCitiesList:[],
      citiesList:{},
      letter:''
    }
  },
  methods:{
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if(res.ret && res.data) {
        const data = res.data;
        this.hotCitiesList = data.hotCities
        this.citiesList = data.cities

      }
    },
    handleLetterChange (letter) {
      this.letter = letter
    }

  },
  mounted(){
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
