<template>
  <div class="fire">
    <div class="space"></div>
    <Card>
      <span>爆款推荐</span>
    </Card>
    <!-- 内容 -->
    <div class="content" v-for="item in list" :key="item.id">
      <img :src="item.url" />
      <div class="status">{{ item.title }}</div>
      <div class="cnt">
        <h4>{{ item.msg1 }}</h4>
        <h3>{{ item.msg2 }}</h3>
        <div class="price">
          <span>￥</span><b>{{ item.price }}</b>
        </div>
      </div>
    </div>
    <div class="image">
      <img src="../../../public/images/fire4.jpg" />
    </div>
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
          title: "老铁推荐",
          msg1: "铁观音2號250g",
          msg2: "核心产区滋味正 ",
          price: "128",
          url: "./images/fire1.jpeg",
        },
        {
          id: 2,
          title: "爆款",
          msg1: "正山小种3號150g",
          msg2: "难以忘怀的桂花香 ",
          price: "99",
          url: "./images/fire2.jpeg",
        },
        {
          id: 3,
          title: "茶友必备",
          msg1: "黑檀镂空六君子",
          msg2: "给生活一点仪式感 ",
          price: "45",
          url: "./images/fire3.jpeg",
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
.content {
  position: relative;
  width: 94%;
  height: 4rem;
  margin: 0.18rem auto;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-sizing: border-box;
  margin-bottom: 0.2rem;
}
.content img {
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.cnt {
  position: absolute;
  right: 0;
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  z-index: 9;
  color: #222;
  padding-right: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}
.cnt h4 {
  color: #666666;
  font-size: 0.34rem;
  text-align: right;
}
.cnt h3 {
  text-overflow: ellipsis;
  color: #333333;
  font-size: 0.4rem;
}
.cnt .price {
  margin-top: 10%;
  color: #b0352f;
  height: 0.5rem;
  font-size: 0.5rem;
  font-weight: normal;
}
.status {
  position: absolute;
  left: 0.4rem;
  top: 0;
  z-index: 9;
  cursor: pointer;
  color: #fff;
  border-radius: 0 0 8px 8px;
  padding: 5px;
  font-size: 0.4rem;
  background: #d4c0a7;
}
.image {
  width: 100%;
  height: 4rem;
}
.image img {
  width: 100%;
  height: 100%;
}
</style>