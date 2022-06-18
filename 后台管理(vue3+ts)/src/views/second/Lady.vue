<template>
  <div class="container" :style="{ backgroundColor: color }">
    <div class="box">
      <div v-for="(obj, index) in ladyList" :key="index">
        <img :src="obj.ladyImgUrl" />
        <div class="tit">{{ obj.ladyName }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    let ladyList = reactive([
      {
        ladyImgUrl: require("@/assets/01.webp"),
        ladyName: "美女1",
      },
      {
        ladyImgUrl: require("@/assets/02.webp"),
        ladyName: "美女2",
      },
      {
        ladyImgUrl: require("@/assets/03.webp"),
        ladyName: "美女3",
      },
      {
        ladyImgUrl: require("@/assets/04.webp"),
        ladyName: "美女4",
      },
      {
        ladyImgUrl: require("@/assets/05.webp"),
        ladyName: "美女5",
      },
      {
        ladyImgUrl: require("@/assets/06.webp"),
        ladyName: "美女6",
      },
    ]);
    return {
      ladyList,
    };
  },
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
      return `rgb(${r},${g},${b},0.5)`;
    },
  },

  mounted() {
    setInterval(() => {
      let col = this.colorStr();
      this.color = col;
    }, 500);
  },
});
</script>

<style scoped>
.container {
  width: calc(100vw - 200px);
  height: calc(100vh - 60px);
}
.box {
  width: 750px;
  margin: 10px auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: 20px;
}
.box img {
  width: 200px;
  height: 150px;
  margin: 20px;
  border-radius: 20px;
}
.tit {
  text-align: center;
  background-color: #fff;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
}
</style>

