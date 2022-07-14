<template>
  <div class="blog">
    <h2>添加博客</h2>
    <form v-if="!submited">
      <label>博客标题</label>
      <input
        type="text"
        v-model="blog.title"
        class="title"
        placeholder="请输入"
      />
      <label class="id">博客id: </label>
      <input
        type="number"
        v-model="blog.id"
        placeholder="请输入"
        class="title"
      />
      <label>博客内容</label>
      <textarea rows="3" v-model="blog.body"></textarea>
      <button @click.prevent="post">添加博客</button>
    </form>
    <!-- 添加后 -->
    <div class="preview" v-if="submited">
      <h3>您的博客发布成功!</h3>
      <p>标题:{{ blog.title }}</p>
      <p>内容:{{ blog.body }}</p>
      <p>博客id:{{ blog.id }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      blog: {
        title: "",
        body: "",
        id: "",
      },
      submited: false,
    };
  },
  methods: {
    post() {
      axios.get("/api/blog").then((res) => {
        if (this.blog.id == "") {
          alert("请输入id");
        } else if (this.blog.title == "") {
          alert("请输入标题");
        } else if (this.blog.body == "") {
          alert("请输入内容");
        } else {
          res.data.blogList.push(this.blog);
          this.submited = true;
        }
      });
    },
  },
};
</script>

<style scoped>
.blog {
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}
.blog h2 {
  text-align: center;
  font-family: "kaiti";
  color: darkolivegreen;
  font-size: 30px;
}
label {
  display: block;
  margin: 20px 0 10px;
  color: darkorange;
}
textarea {
  display: block;
  width: 100%;
  padding: 8px;
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
.checkbox {
  height: 30px;
  display: flex;
}
.check {
  display: flex;
}
.checkbox label {
  display: inline-block;
  color: rgb(5, 166, 230);
  margin: 5px 5px;
}
.checkbox input {
  display: inline-block;
  margin: 5px 5px;
}
button {
  display: block;
  margin: 15px 0;
  background-color: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
}
.id {
  margin-top: 5px;
}
.preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
.preview h3 {
  text-align: center;
  color: cadetblue;
}
.preview p {
  margin: 10px 0;
  color: darkorange;
}
</style>
