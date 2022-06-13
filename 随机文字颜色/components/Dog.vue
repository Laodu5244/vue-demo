<template>
  <div class="my_div">
    <img src="../img/dog.webp" />
    <p @click="btn" :style="{ backgroundColor: color }">这是一只可爱的小狗</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "#fff",
    };
  },
  methods: {
    // 随机颜色方法
    colorStr() {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      return `rgb(${r},${g},${b})`;
    },
    btn() {
      let col = this.colorStr();
      this.color = col;
    },
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
