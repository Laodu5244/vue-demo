<template>
  <div class="show">
    <Blog v-for="item in blogList" :key="item.id" :item="item" />

    <div class="page">
      <el-button type="success" :plain="false" @click="last">上一页</el-button>
      <el-button type="success" :plain="false" @click="next">下一页</el-button>
    </div>

    <div class="load" v-if="show">数据加载中. . .</div>
  </div>
</template>

<script>
import Blog from "@/components/Blog.vue";
export default {
  components: { Blog },
  data() {
    return {
      page: 1,
      blogList: [],
      show: false,
    };
  },
  created() {
    this.show = true;
    this.getData();
  },
  methods: {
    // 获取网络数据
    getData() {
      this.axios({
        url: "https://ku.qingnian8.com/dataApi/blog/showBlog.php",
        params: {
          page: this.page,
          num: 12,
        },
      }).then((res) => {
        this.blogList = res.data;
        this.show = false;
      });
    },
    // 点击上一页
    last() {
      if (this.page > 1) {
        this.page--;
      } else {
        this.$message({
          message: "已经是第一页了",
          type: "warning",
          center: true,
          plain: true,
        });
        return;
      }
      this.show = true;
      this.getData();
      document.documentElement.scrollTop = 0;
    },
    // 点击下一页
    next() {
      if (this.blogList.length == 12) {
        this.page++;
      } else {
        this.$message({
          message: "已经是第最后一页了",
          type: "warning",
          center: true,
          plain: true,
        });
        return;
      }
      this.show = true;
      this.getData();
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style lang="less" scoped>
.show {
  min-height: 500px;
  border: 1px dotted #41b883;
  padding: 30px;
  margin-bottom: 50px;
}
.page {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
.load {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #41b883;
  background-color: rgba(0, 0, 0, 0.1);
  font-size: 30px;
}
</style>