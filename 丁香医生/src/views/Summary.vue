<template>
  <div class="summary">
    <Head />
    <div class="logo" @click="toHome">
      <img src="@/assets/images/logo.png">
      <p>专业可信赖的医疗健康服务平台</p>
    </div>
    <div class="content">
      <img src="@/assets/images/logo-content.png">
    </div>
    <div class="home" @click="toHome">返回首页</div>
  </div>
</template>

<script>
import Head from '@/components/Head.vue'
export default {
  components: { Head },
  methods:{
    // 返回首页
    toHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.logo img{
  width:64%;
  margin: 0.3rem auto;
  display: block;
}
.logo p{
  color:#777;
  text-align: center;
  font-size: 0.36rem;
}
.content{
  margin: 0.5rem auto;
}
.content img{
  width:84%;
  margin: 0 auto;
  display: block;
}
.home{
  width:50%;
  margin: 1rem auto;
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
