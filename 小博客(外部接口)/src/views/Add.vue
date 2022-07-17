<template>
  <div class="blog">
    <form>
      <label>
        标题:
        <input
          type="text"
          v-model="item.title"
          class="title"
          placeholder="请输入"
      /></label>

      <label class="author">
        作者:
        <input
          type="text"
          v-model="item.author"
          placeholder="请输入"
          class="title"
      /></label>

      <label class="classify">
        分类:
        <select v-model="item.classify" placeholder="请选择">
          <option v-for="item in classList" :key="item.id">
            {{ item.classname }}
          </option>
        </select>
      </label>

      <label>内容: <textarea rows="3" v-model="item.content"></textarea></label>
      <div class="btn">
        <el-button type="danger" @click.prevent="clear">清空内容</el-button>
        <el-button type="success" @click.prevent="add">提交博客</el-button>
      </div>
    </form>
    <div v-show="show">
      <h3>博客预览</h3>
      <Blog :item="item" />
    </div>
  </div>
</template>

<script>
import Blog from "@/components/Blog.vue";
export default {
  components: { Blog },
  data() {
    return {
      item: {
        title: "",
        posttime: Date.now() / 1000,
        author: "",
        classify: "",
        content: "",
      },
      show: false,
      classList: [],
    };
  },
  methods: {
    getClass() {
      this.axios
        .get("https://ku.qingnian8.com/dataApi/blog/classBlog.php")
        .then((res) => {
          this.classList = res.data;
        });
    },
    // 清除数据
    clear() {
      this.$confirm("此操作不可逆! 是否确定删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        this.item.title = "";
        this.item.author = "";
        this.item.classify = "";
        this.item.content = "";
        this.$message({
          type: "success",
          showClose: true,
          message: "删除成功!",
        });
      });
    },
    // 添加博客
    add() {
      if (
        this.item.title == "" ||
        this.item.author == "" ||
        this.item.classify == "" ||
        this.item.content == ""
      ) {
        this.$alert("输入不能为空", {
          confirmButtonText: "确定",
        });
        return;
      }
      this.axios({
        url: "https://ku.qingnian8.com/dataApi/blog/addBlog.php",
        params: this.item,
      }).then((res) => {
        console.log(res);
        this.item.title = "";
        this.item.author = "";
        this.item.classify = "";
        this.item.content = "";
      });
      this.$router.push("/");
      this.$message({
        type: "success",
        showClose: true,
        message: "发布成功!",
      });
    },
  },
  created() {
    this.getClass();
  },
  updated() {
    if (
      this.item.title ||
      this.item.author ||
      this.item.classify ||
      this.item.content
    ) {
      this.show = true;
    } else {
      this.show = false;
    }
  },
};
</script>

<style scoped>
.blog {
  margin: 0 auto;
  max-width: 600px;
  min-height: 500px;
  padding: 10px;
  margin-bottom: 50px;
}
.blog h3 {
  text-align: center;
  font-family: "kaiti";
  color: darkolivegreen;
  font-size: 30px;
  margin: 5px auto;
}
label {
  display: block;
  margin: 15px 0 10px;
  color: darkorange;
}
select {
  border: 2px solid skyblue;
  border-radius: 5px;
  width: 100px;
  outline: none;
}
textarea {
  display: block;
  width: 100%;
  padding: 8px;
  margin: 8px;
  border: 2px solid skyblue;
  border-radius: 5px;
  outline: none;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
}
.title {
  height: 30px;
  width: 260px;
  border: 2px solid skyblue;
  border-radius: 5px;
  outline: none;
  padding: 8px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
}
.btn {
  display: flex;
  justify-content: center;
  margin: 15px 0;
}
</style>
