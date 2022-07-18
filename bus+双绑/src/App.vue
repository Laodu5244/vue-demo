<template>
  <div>
    <h2>app module</h2>
    <input type="text" v-model="add" />
    <button @click="addLi">add</button>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <div>
          {{ item }}
          <button @click="rem(index)">删除</button>
        </div>
      </li>
    </ul>
    <Son :data="list"></Son>
  </div>
</template>
<script>
import Son from "@/components/Son";
export default {
  components: { Son },
  data() {
    return {
      list: [],
      add: "",
    };
  },
  mounted() {
    this.$bus.$on("send", (val) => {
      val.forEach((item) => {
        this.list.push(item);
      });
    });
  },
  methods: {
    addLi() {
      if (this.add) {
        this.list.push(this.add);
      } else {
        alert("添加内容不能为空");
      }
    },
    rem(index) {
      this.list.splice(index, 1);
    },
  },
};
</script>