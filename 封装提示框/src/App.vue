<template>
  <div class="app">
    <!-- 提示框 -->
    <h2>提示框</h2>
    <el-button type="danger" @click="open">提示</el-button>
    <el-button type="danger" @click="openNotice">自定</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    //element-ui 配置
    open() {
      this.$notify({
        title: "vue is so easy",
        message: "js is good",
        duration: 2000,
      });
    },
    //自定义组件 配置
    openNotice() {
      this.$notice({
        title: "封装组件",
        message: "你学废了吗",
        duration: 2000,
      });
    },
  },
};
</script>

