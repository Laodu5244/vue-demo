<template>
  <div v-if="isShow">
    <h2>son module</h2>
    <button @click="send">send</button>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      list: ["小明", "小红", "小玲", "小宁"],
      isShow: true,
    };
  },
  methods: {
    send() {
      this.$bus.$emit("send", this.list);
      this.isShow = false;
    },
  },
  watch: {
    data() {
      console.log(this.data);
      if (this.data.length === 0) {
        this.isShow = true;
      }
    },
  },
};
</script>

