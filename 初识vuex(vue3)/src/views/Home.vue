<template>
  <div class="home">
    <!-- 使用vuex中的state数据 -->
    <p>{{ $store.state.msg }}</p>
    <!-- 使用vuex中的getters数据 -->
    <p>{{ $store.getters.msg2 }}</p>
    <button @click="mutation">mutation</button>
  </div>
</template>

<script>
// 引入store
import { useStore } from "vuex";
export default {
  setup() {
    // 使用vuex仓库
    const store = useStore();
    // state数据
    console.log(store.state.msg);
    // getters数据
    console.log(store.getters.msg2);
    // mutations方法
    const mutation = () => {
      store.commit("msg3");
    };
    // actions方法
    store.dispatch("msg4");

    return { mutation };
  },
};
</script>
