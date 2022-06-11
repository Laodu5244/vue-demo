<template>
  <div id="app">
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        <span>{{ item }} </span>
        <button @click="del(index)">删除</button>
      </li>
    </ul>
    <input type="text" v-model="msg" placeholder="添加谁?" />
    <button @click="add">添加</button>
    <button @click="move">排序</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      arr: ["东邪", "西毒"],
      msg: "",
    };
  },
  methods: {
    add() {
      if (!this.msg.trim()) {
        return alert("输入不能为空");
      }
      this.arr.push(this.msg);
      this.msg = "";
    },
    del(index) {
      if (confirm("确定删除吗?")) {
        this.arr.splice(index, 1);
      }
    },
    move() {
      this.arr.push(this.arr.shift());
    },
  },
};
</script>
