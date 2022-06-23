<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div v-for="item in swiperList" :key="item.id" class="swiper-slide">
        <img :src="item.url" />
      </div>
    </div>
    <!-- 分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {
      swiperList: [
        {
          id: 1,
          url: "./images/swiper1.jpeg",
        },
        {
          id: 2,
          url: "./images/swiper2.jpeg",
        },
        {
          id: 3,
          url: "./images/swiper3.jpeg",
        },
      ],
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
        disableOnInteraction: false,
      },
      // 分页器
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
};
</script>

<style scoped>
.swiper-container {
  width: 100%;
  height: 5rem;
}
.swiper-slide img {
  width: 100%;
  height: 5rem;
}
.swiper-pagination /deep/ .swiper-pagination-bullet {
  background-color: #fff;
  opacity: 1;
}
.swiper-pagination /deep/ .swiper-pagination-bullet-active {
  background-color: #b0352f;
  opacity: 1;
}
</style>