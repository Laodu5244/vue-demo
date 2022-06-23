<template>
  <div class="little">
    <div class="space"></div>
    <Card><span>猜你喜欢</span></Card>
    <!-- 内容列表 -->
    <ul>
      <li v-for="item in list" :key="item.id">
        <div class="pic">
          <img :src="item.url" />
        </div>
        <div class="title2">{{ item.title }}</div>
        <div class="price">
          <span>￥</span><b>{{ item.price }}</b>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "@/components/Home/common/Card";
export default {
  components: { Card },
  data() {
    return {
      list: [
        {
          id: 1,
          title: "雨前珍稀白茶1号",
          price: 68,
          url: "./images/l1.png",
        },
        {
          id: 2,
          title: "武夷山灰芽花香金骏眉3号",
          price: 128,
          url: "./images/l2.jpeg",
        },
        {
          id: 3,
          title: "2022春茶明前龙井飞花",
          price: 128,
          url: "./images/l3.jpeg",
        },
        {
          id: 4,
          title: "云南凤庆高海拔古树滇红",
          price: 99,
          url: "./images/l4.jpeg",
        },
        {
          id: 5,
          title: "消青工艺浓香铁观音1号",
          price: 128,
          url: "./images/l5.png",
        },
        {
          id: 6,
          title: "武夷山高级大红袍2号",
          price: 99,
          url: "./images/l6.jpeg",
        },
        {
          id: 7,
          title: "漳平水仙兰香1号",
          price: 99,
          url: "./images/l7.jpeg",
        },
        {
          id: 8,
          title: "漳平水仙兰香1号",
          price: 68,
          url: "./images/l8.png",
        },
        {
          id: 9,
          title: "浙江花果香碧螺春2号",
          price: 88,
          url: "./images/l9.png",
        },
        {
          id: 10,
          title: "2017福鼎高山枣香老贡眉",
          price: 118,
          url: "./images/l10.jpeg",
        },
        {
          id: 11,
          title: "2018年枣香寿眉白龙珠",
          price: 68,
          url: "./images/l11.jpeg",
        },
        {
          id: 12,
          title: "2014大黄金叶普洱生茶砖",
          price: 68,
          url: "./images/l12.jpeg",
        },
        {
          id: 13,
          title: "2016南糯山古树普洱生茶",
          price: 98,
          url: "./images/l13.jpeg",
        },
        {
          id: 14,
          title: "云南糯米香小熟沱普洱",
          price: 30,
          url: "./images/l14.jpeg",
        },
        {
          id: 15,
          title: "新会小青柑普洱铁罐装",
          price: 168,
          url: "./images/l15.jpeg",
        },
        {
          id: 16,
          title: "大师建盏-黑釉银滴盏",
          price: 450,
          url: "./images/l16.jpeg",
        },
        {
          id: 17,
          title: "建盏茶漏（茶漏+茶托",
          price: 99,
          url: "./images/l7.jpeg",
        },
        {
          id: 18,
          title: "紫泥-六方佛光壶",
          price: 1580,
          url: "./images/l18.jpeg",
        },
        {
          id: 19,
          title: "建阳红色芝麻毫建盏茶具",
          price: 399,
          url: "./images/l19.jpeg",
        },
        {
          id: 20,
          title: "黑砂快客旅行茶具",
          price: 288,
          url: "./images/l20.jpeg",
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
ul {
  display: flex;
  flex-wrap: wrap;
}
ul li {
  width: 50%;
  padding: 0.1rem;
  box-sizing: border-box;
  margin-bottom: 0.4rem;
}
.pic {
  background: #f3f3f3;
  position: relative;
}
.pic img {
  width: 100%;
}
.title2 {
  padding: 8px 0;
  font-size: 0.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.price {
  color: #b0352f;
  height: 0.5rem;
  font-size: 0.5rem;
  font-weight: normal;
}
</style>