<template>
  <div v-for="(item, index) in list" :key="index">
    <div class="item">
      <input type="checkbox" v-model="item.complete" />
      {{ item.title }}
      <button class="del" @click="del(item, index)">删除</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "Main",
  emits: ["del"],
  props: {
    list: Array,
  },
  setup(props, ctx) {
    let store = useStore();
    let del = (item, index) => {
      ctx.emit("del", index);
    };
    return {
      del,
      store,
    };
  },
});
</script>

<style scoped lang='scss'>
.item {
  width: 400px;
  height: 35px;
  line-height: 35px;
  position: relative;
  display: flex;
  align-items: center;
  button {
    position: absolute;
    right: 20px;
    display: none;
    z-index: 99;
  }
  &:hover {
    background: #ddd;
    button {
      display: block;
    }
  }
}
input {
  margin: 0 15px 0 20px;
}
</style>