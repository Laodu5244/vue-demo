<template>
  <div class="my_div">
    <img :src="dogObj.dogImgUrl" />
    <p :style="{ backgroundColor: color }" @click="getName">
      {{ dogObj.dogName }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "#fff",
    };
  },
  props: {
    dogObj: Object,
  },
  methods: {
    // 随机颜色方法
    colorStr() {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      return `rgb(${r},${g},${b})`;
    },
    getName() {
      this.$emit("dog", this.dogObj.dogName);
    },
  },
  mounted() {
    setInterval(() => {
      let col = this.colorStr();
      this.color = col;
    }, 500);
  },
};
</script>

<style>
.my_div {
  width: 200px;
  border: 1px solid black;
  text-align: center;
}
.my_div img {
  width: 100%;
  height: 200px;
}
</style>
