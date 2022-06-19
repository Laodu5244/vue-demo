<template>
  <div class="box">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="item in imgs" :key="item.id" class="swiper-slide">
          <img :src="item.url" />
        </div>
      </div>
      <!-- 分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {
      imgs: [
        {
          id: "01",
          url: require("@/assets/01.webp"),
        },
        {
          id: "02",
          url: require("@/assets/02.webp"),
        },
        {
          id: "03",
          url: require("@/assets/03.webp"),
        },
        {
          id: "04",
          url: require("@/assets/04.webp"),
        },
        {
          id: "05",
          url: require("@/assets/05.webp"),
        },
        {
          id: "06",
          url: require("@/assets/06.webp"),
        },
      ],
    };
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
        disableOnInteraction: false,
      },
      // 分页器
      pagination: {
        el: ".swiper-pagination",
      },
      // 前进后退按钮
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    mySwiper.params.pagination.clickable = true;
    mySwiper.pagination.destroy();
    mySwiper.pagination.init();
    mySwiper.pagination.bullets
      .eq(0)
      .addClass("swiper-pagination-bullet-active");
  },
};
</script>

<style scoped >
.box {
  width: 650px;
  margin: 100px auto;
}
.swiper-container {
  width: 650px;
  height: 450px;
}
.swiper-slide img {
  width: 650px;
  height: 450px;
}
.swiper-pagination-bullet {
  width: 30px;
  height: 30px;
}
</style>