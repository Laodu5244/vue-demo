<template>
  <div class="screen">
    <div class="space"></div>
    <Card>
      <span>专题优选</span>
    </Card>
    <div class="box">
      <van-swipe :loop="false" :show-indicators="false" :width="280">
        <van-swipe-item v-for="item in imgList" :key="item.id">
          <img :src="item.url" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Home/common/Card";
export default {
  components: {
    Card,
  },
  data() {
    return {
      imgList: [
        {
          id: 1,
          url: "./images/screen1.jpeg",
        },
        {
          id: 2,
          url: "./images/screen2.jpeg",
        },
        {
          id: 3,
          url: "./images/screen3.jpeg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.space {
  width: 100%;
  height: 0.36rem;
  background-color: #f5f5f5;
}
.box {
  width: 90%;
  margin: 0 auto;
  background-color: #fff;
  height: 4rem;
  border-radius: 0.3rem;
}
.box img {
  height: 3.6rem;
  width: 7.2rem;
  border-radius: 0.3rem;
}
</style>