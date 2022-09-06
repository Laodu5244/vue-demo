<template>
  <div class="footer">
    <div class="footer" @click="toHome">跳转首页查看详情</div>
  </div>
</template>

<script>
export default {
  methods:{
    toHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  width:100%;
  height: 1.5rem;
  background-color: rgb(245, 80, 80);
  line-height: 1.5rem;
  text-align: center;
  color:#fff;
  font-size: 0.4rem;
}
</style>