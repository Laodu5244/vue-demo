<template>
  <el-container>
    <!-- 头部 -->
    <el-header>
      <el-row :gutter="20">
        <el-col :span="4">
          <img class="logo" src="../assets/logo.png" />
        </el-col>
        <el-col :span="16">
          <h2>后台管理</h2>
        </el-col>
        <el-col :span="4">
          <el-button type="warning" round @click="toLogin">登 录</el-button>
        </el-col>
      </el-row>
      <div></div>
    </el-header>

    <!-- 内容 -->
    <el-container>
      <el-aside width="200px">
        <el-menu
          router
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          :default-active="active"
          text-color="#fff"
        >
          <el-menu-item
            v-for="item in list"
            :key="item.path"
            :index="item.path"
          >
            <span>{{ item.meta.title }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();
    const list = router.getRoutes().filter((v) => v.meta.isShow);
    let toLogin = () => {
      router.push("/login");
    };
    return {
      list,
      toLogin,
      active: route.path,
    };
  },
});
</script>

<style lang="scss" scoped>
.logo {
  height: 60px;
}
.el-header {
  background-color: pink;
  height: 60px;
}
.el-header h2 {
  text-align: center;
  color: orangered;
  line-height: 60px;
  font-family: "楷体";
  font-size: 35px;
}
.el-col {
  text-align: right;
  line-height: 60px;
}
.el-aside {
  border: 0;
  .el-menu {
    border: 0;
    height: calc(100vh - 60px);
  }
}
.el-main {
  padding: 0;
  margin-top: -10px;
  overflow: hidden;
  border: 0;
}
</style>

