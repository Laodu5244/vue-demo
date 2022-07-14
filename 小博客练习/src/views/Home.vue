<template>
  <div class="container">
    <div v-theme:column="'narrow'" class="home">
      <h2 class="title">博客总览</h2>
      <input type="text" v-model="search" class="search" placeholder="搜索" />
      <!-- 内容列表 -->
      <div class="single" v-for="item in fliteredBlogs" :key="item.id">
        <router-link :to="'/single/' + item.id">
          <h2 v-rainbow>{{ item.title | snippet }}</h2>
        </router-link>
        <article>{{ item.body }}</article>
      </div>
      <h3 class="msg" v-if="!fliteredBlogs.length">暂无匹配内容,刷新试试?</h3>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      blogs: [],
      search: "",
    };
  },
  created() {
    axios.get("/api/blog").then((res) => {
      this.blogs = res.data.blogList;
    });
  },
  computed: {
    fliteredBlogs() {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search);
      });
    },
  },
  filters: {
    snippet(val) {
      return val.slice(0, 28) + "...";
    },
  },
  // 自定义指令
  directives: {
    rainbow: {
      bind(el) {
        el.style.color = "#" + Math.random().toString(16).slice(2, 8);
      },
    },
    theme: {
      bind(el, bind) {
        if (bind.arg == "column") {
          el.style.background = "#6677cc";
          el.style.padding = "20px";
        }
      },
    },
  },
};
</script>

<style scoped>
.container {
  height: 1600px;
}
.home {
  max-width: 800px;
  margin: 20px auto;
  border-radius: 10px;
}
.title {
  text-align: center;
  font-family: "kaiti";
  color: orange;
  font-size: 30px;
  margin: 0 auto 20px;
}
.single {
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
  background: #eee;
}
.search {
  display: block;
  width: 100%;
  padding: 8px;
  border: 2px solid skyblue;
  border-radius: 5px;
  outline: none;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
}
.msg {
  color: orange;
  text-align: center;
  margin-top: 20px;
}
a {
  color: #333;
}
</style>