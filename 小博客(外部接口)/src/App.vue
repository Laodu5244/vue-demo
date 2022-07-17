<template>
  <div class="app">
    <Header />
    <div class="main">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Header, Footer },
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "微软雅黑";
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
.app {
  width: 80%;
  overflow: hidden;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(65, 184, 131, 0.5);
}
.main {
  min-height: 200px;
}
</style>
