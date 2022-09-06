<template>
  <div class="area">
    <h2 class="header-title">风险地区</h2>
    <div class="content">
      <!-- 高风险地区 -->
      <template v-if="high.length>0">
        <div class="title">高风险地区{{high.length}}个</div>
        <ul>
          <li v-for="(item,index) in high" :key="index">
            {{item}}
          </li>
        </ul>
      </template>

      <!-- 中风险地区 -->
      <template v-if="mid.length>0">
        <div class="title">中风险地区{{mid.length}}个</div>
        <ul>
          <li v-for="(item,index) in mid" :key="index">
            {{item}}
          </li>
        </ul> 
      </template>
    </div>
    <div class="home" @click="toHome">返回首页</div>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  data(){
    return{
      high:[], //高风险地区
      mid:[],  //中风险地区
    }
  },
  async created(){
    let res = await api.getCov()
    let riskarea =res.data.newslist[0].riskarea
    this.high = riskarea.high.slice(1,5)
    this.mid = riskarea.mid.slice(1,7)
  },
  methods:{
    // 返回首页
    toHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.area{
  padding:0.2rem;
}
.header-title{
  color:rgb(221, 182, 11);
  font-size:0.42rem;
  text-align: center;
  background-color: #f5f5f5;
  padding:0.2rem;
}
.title{
  color:orangered;
  font-size:0.36rem;
  font-weight: bold;
  padding:0.1rem;
}
ul li{
  padding:0.2rem;
  background-color: #f5f5f5;
}
.home{
  position:fixed;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  width:50%;
  background-color: rgb(11, 187, 122);
  padding: 0.2rem;
  text-align: center;
  font-size: 0.4rem;
  border-radius:1rem;
  color:#fff;
  font-weight: bold;
  letter-spacing: 0.1rem;
}
</style>
