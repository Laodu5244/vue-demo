<template>
  <div class="home">
    <Header @add="add" />
    <Main :list="list" @del="del" />
    <Footer :list="list" @clear="clear" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer.vue";

import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "Home",
  components: { Header, Footer, Main },
  setup() {
    let store = useStore();
    let list = computed(() => {
      return store.state.list;
    });
    let value = ref("");

    // 添加
    let add = (val) => {
      if (val.length === 0) {
        alert("输入不能为空");
        value.value = "";
        return;
      }
      value.value = val;
      let flag = true;
      list.value.map((item) => {
        if (item.title === value.value) {
          flag = false;
          alert("任务已经存在");
        }
      });
      if (flag) {
        store.commit("addTodo", {
          title: value.value,
          complete: false,
        });
      }
    };

    // 删除
    let del = (val) => {
      store.commit("delTodo", val);
    };

    // 清除已完成
    let clear = (val) => {
      store.commit("clear", val);
    };
    return {
      store,
      list,
      add,
      del,
      clear,
      value,
    };
  },
};
</script>

<style>
.home {
  width: 400px;
  margin: 80px auto;
}
</style>

