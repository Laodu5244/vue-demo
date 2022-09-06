<template>
  <div class="echarts">
    <h3 class="title">国内疫情地图</h3>
    <!-- 地图容器 -->
    <div id="main"></div>
  </div>
</template>

<script>
import api from '@/api/index'
export default {
  data(){
    return{
      city:[]
    }
  },
  mounted() {
    this.$mychart.chinaMap('main')
  },
};
</script>

<style scoped>
.title{
  margin:0.2rem;
  padding-left: 0.2rem;
  border-left: 0.1rem solid rgb(1, 1, 46);
}
#main {
  width: 100%;
  height: 7rem;
}
</style>
