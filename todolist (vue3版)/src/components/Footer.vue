<template>
  <div class="footer" v-if="list.length">
    <div>已完成{{ isComplete }} / 全部{{ list.length }}</div>
    <button @click="clear">清除已完成</button>
  </div>
  <div v-else class="else">暂无任务</div>
</template>

<script>
import { defineComponent, computed } from "vue";
export default defineComponent({
  name: "Footer",
  props: {
    list: Array,
  },
  setup(props, ctx) {
    let isComplete = computed(() => {
      let arr = props.list.filter((item) => {
        return item.complete;
      });
      return arr.length;
    });

    let clear = () => {
      let arr = props.list.filter((item) => {
        return item.complete === false;
      });
      ctx.emit("clear", arr);
    };
    return {
      isComplete,
      clear,
    };
  },
});
</script>

<style lang="scss">
.footer {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.else {
  text-align: center;
}
</style>