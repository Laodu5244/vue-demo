<template>
  <div>
    <h2 class="title">博客详情</h2>
    <div class="single">
      <h2>{{ blog.title }}</h2>
      <article>{{ blog.body }}</article>
    </div>
    <button @click="toHome">返回首页</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    };
  },
  created() {
    axios.get("/api/blog").then((res) => {
      this.blog = res.data.blogList[`${this.id - 1}`];
    });
  },
  methods: {
    toHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.single {
  max-width: 800px;
  margin: 10px auto;
  padding: 10px;
  background: #eee;
  border: 1px dotted #aaa;
}
.title {
  text-align: center;
  font-family: "kaiti";
  color: rgb(5, 71, 95);
  font-size: 30px;
  margin: 20px auto;
}
.single h2 {
  color: orange;
  font-style: italic;
}
.single article {
  margin-top: 10px;
  color: #555;
}
button {
  display: block;
  margin: 15px auto;
  background-color: crimson;
  color: #fff;
  border: 0;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
}
</style>