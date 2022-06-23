<template>
  <div class="headline">
    <img src="@/assets/images/headline.png" />

    <van-notice-bar :scrollable="false">
      <van-swipe
        vertical
        class="notice-swipe"
        :autoplay="5000"
        :show-indicators="false"
      >
        <van-swipe-item v-for="item in newsList" :key="item.id">{{
          item.title
        }}</van-swipe-item>
      </van-swipe>
    </van-notice-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newsList: [
        {
          id: 1,
          title: "重要公告: 真伪客服官方验证功能上线",
        },
        {
          id: 2,
          title: "岩茶为何不提春茶概念？",
        },
        {
          id: 3,
          title: "纯手工紫砂壶工艺",
        },
      ],
    };
  },
};
</script>

<style scoped>
.headline {
  width: 100%;
  height: 1rem;
  border-top: 1px solid #ccc;
}
.headline::after,
.headline::before {
  content: "";
  clear: both;
}
.headline img {
  float: left;
  height: 0.5rem;
  margin: 0.25rem 0.2rem 0;
}
.van-notice-bar {
  background-color: #fff;
  color: #555;
  padding: 0 0.2rem;
}
.notice-swipe {
  float: left;
  height: 40px;
  line-height: 40px;
  font-size: 0.42rem;
}
</style>