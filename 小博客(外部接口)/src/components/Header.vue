<template>
  <div class="header">
    <div class="logo" @click="toHome" title="返回首页">
      <img src="@/assets/images/logo.svg" />
      <div class="text">Vue博客系统</div>
    </div>
    <div class="nav">
      <router-link to="/" exact>博客列表</router-link>
      <router-link to="/add" exact>添加博客</router-link>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toHome() {
      if (this.$route.path == "/") {
        return;
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  box-shadow: 0 0 20px rgba(65, 184, 131, 0.5);
  height: 80px;
  background: #41b883;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
  .logo {
    cursor: pointer;
    display: flex;
    align-items: center;
    img {
      height: 48px;
    }
    .text {
      margin-left: 12px;
      color: #f4f4f4;
      font-size: 20px;
      font-style: italic;
    }
  }
  .nav {
    display: flex;
    align-items: center;
    a {
      display: inline-block;
      border-radius: 15px;
      margin: 5px;
      padding: 5px 10px;
      font-size: 16px;
      color: #f4f4f4;
      &.router-link-active {
        background-color: #f4f4f4;
        color: #41b883;
      }
    }
  }
}
</style>
