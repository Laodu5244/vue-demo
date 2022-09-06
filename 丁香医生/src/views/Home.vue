<template>
  <div class="home">
    <Head />
    <!-- 疫情热点 -->
    <Cov :getNews='news'></Cov>
    <!-- 导航栏 -->
    <Nav />
    <!-- 数据统计 -->
    <Census :covData="covData"/>
    <!-- 地图 -->
    <Echarts />
  </div>
</template>

<script>
import api from '@/api/index'

import Head from '@/components/Head.vue';
import Cov from '@/components/Cov.vue';
import Nav from '@/components/Nav.vue';
import Census from '@/components/Census.vue';
import Echarts from '@/components/Echarts.vue';
export default {
  components: { Head, Cov, Nav, Census, Echarts },
  data(){
    return {
      news:[],
      covData:{}
    }
  },
  created(){
    // 请求接口
    api.getCov().then(res =>{
      this.news = res.data.newslist[0].news
      this.covData = res.data.newslist[0].desc
      // console.log(this.covData)
    })
  }
};
</script>

