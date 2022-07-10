<template>
  <span>
    <button @click="sub">-</button>
    <span> {{ count }} </span>
    <button @click="add">+</button>
  </span>
</template>

<script>
export default {
  props: ["count", "index"],
  methods: {
    sub() {
      this.$emit("sub", this.index);
    },
    add() {
      this.$emit("add", this.index);
    },
  },
};
</script>

