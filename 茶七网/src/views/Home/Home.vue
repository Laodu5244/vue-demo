<template>
  <div class="home">
    <Header />
    <div class="tab">
      <van-tabs v-model="active">
        <van-tab v-for="item in tabList" :key="item.id" :title="item.label">
        </van-tab>
      </van-tabs>
    </div>

    <!-- 主体内容 -->
    <section>
      <Swiper />
      <Icons />
      <Headline />
      <Little />
      <Today />
      <Screen />
      <Fire />
      <Tea />
      <Like />
      <Footer />
    </section>

    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "@/components/common/Tabbar";
import Header from "@/components/Home/Header";
import Swiper from "@/components/Home/Swiper";
import Icons from "@/components/Home/Icons";
import Headline from "@/components/Home/Headline";
import Little from "@/components/Home/Little";
import Today from "@/components/Home/Today";
import Screen from "@/components/Home/Screen";
import Fire from "@/components/Home/Fire";
import Tea from "@/components/Home/Tea";
import Like from "@/components/Home/Like";
import Footer from "@/components/Home/Footer";

export default {
  components: {
    Tabbar,
    Header,
    Swiper,
    Icons,
    Headline,
    Little,
    Today,
    Screen,
    Fire,
    Tea,
    Like,
    Footer,
  },
  data() {
    return {
      active: 0,
      tabList: [
        { id: 1, label: "推荐" },
        { id: 2, label: "金骏眉" },
        { id: 3, label: "大红袍" },
        { id: 4, label: "铁观音" },
        { id: 5, label: "绿茶" },
        { id: 6, label: "紫砂壶" },
        { id: 7, label: "漳平水仙" },
        { id: 8, label: "普洱" },
        { id: 9, label: "正山小种" },
        { id: 10, label: "茉莉花茶" },
        { id: 11, label: "建盏" },
        { id: 12, label: "大师壶" },
        { id: 13, label: "茶具" },
      ],
    };
  },
};
</script>


<style scoped>
.tab {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  margin-top: 1.2rem;
}
section {
  margin-top: 2.4rem;
  margin-bottom: 1.8rem;
  width: 100%;
  overflow: hidden;
}
</style>