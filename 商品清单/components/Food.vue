<template>
  <div>
    <span>{{ gName }}</span>
    <button @click="add">+</button>
    <span>{{ gCount }}</span>
    <button @click="sub">-</button>
  </div>
</template>

<script>
export default {
  name: "Food",
  props: {
    gName: String,
    gCount: Number,
    ind: Number,
  },
  methods: {
    add() {
      this.$emit("addEvent", this.ind);
    },
    sub() {
      this.$emit("subEvent", this.ind);
    },
  },
};
</script>
