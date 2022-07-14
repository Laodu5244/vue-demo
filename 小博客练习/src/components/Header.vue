<template>
  <div class="header">
    <router-link to="/" exact>博客</router-link>
    <router-link to="/blog" exact>添加</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  text-align: center;
  background-color: pink;
}
a {
  display: inline-block;
  color: #fff;
  text-decoration: none;
  padding: 10px;
  margin: 15px 10px;
  border-radius: 5px;
}
.router-link-active {
  background-color: rgb(8, 129, 34);
}
</style>