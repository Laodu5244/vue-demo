<template>
  <div class="cov">
    <h2 class="title">
      <img src="@/assets/images/yiqing.png">
    </h2>
    <p v-for="item in getNews" :key="item.id" @click="summary">
      <span>最新</span>
      {{item.title}}
    </p>
  </div>
</template>

<script>
export default {
  props:{
    getNews:Array
  },
  methods:{
    summary(){
      if (this.$route.path == "/summary") {
        return;
      } else {
        this.$router.push('/summary')
      }
    }
  }
}
</script>

<style scoped>
.cov{
  padding: 0.2rem;
}
.title{
  height:0.6rem;
  padding-left: 0.2rem;
  margin-bottom: 0.2rem;
  border-left: 0.1rem solid rgb(14, 3, 90);
}
.title img{
  height:0.6rem;
}
p{
  color:#666;
  line-height: 0.6rem;
  font-size: 0.35rem;
}
span{
  background-color: orange;
  padding:0.05rem;
  border-radius: 0.1rem;
  font-size: 0.3rem;
  color:#fff;
}
</style>
