<template>
  <input
    type="text"
    placeholder="请输入"
    v-model="value"
    @keydown.enter="enter"
  />
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Header",
  setup(props, ctx) {
    let value = ref("");
    // 按回车确认
    let enter = () => {
      ctx.emit("add", value.value);
      value.value = "";
    };
    return {
      value,
      enter,
    };
  },
});
</script>

<style scoped>
input {
  width: 380px;
  height: 40px;
  margin-bottom: 10px;
  font-size: 24px;
  border-radius: 20px;
  border: 2px solid skyblue;
  padding-left: 20px;
  padding-right: -20px;
  outline-color: rgb(5, 178, 246);
  box-shadow: 0px 0px 10px rgba(4, 104, 143, 0.5);
}
</style>