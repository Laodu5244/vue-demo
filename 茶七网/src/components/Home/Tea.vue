<template>
  <div class="tea">
    <div class="space"></div>
    <Card><span>茶文化</span></Card>
    <div class="box">
      <div class="image" v-for="item in list" :key="item.id">
        <img :src="item.url" />
        <div class="cnt">
          <h3>{{ item.title }}</h3>
          <p>{{ item.msg }}</p>
        </div>
      </div>
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
          title: "好文精选",
          msg: "原创好文都在这",
          url: require("@/assets/images/t1.jpg"),
        },
        {
          id: 2,
          title: "茶叶百科",
          msg: "让您喝得更专业",
          url: require("@/assets/images/t2.jpg"),
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
  background-color: #fff;
}
.box {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 3rem;
}
.image {
  position: relative;
  width: 46%;
  height: 2.7rem;
  border-radius: 0.2rem;
}
.image img {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.2rem;
}
.cnt {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0.3rem;
  left: 0.3rem;
}
.image h3 {
  font-size: 0.4rem;
  color: #333333;
  font-weight: bold;
  display: block;
}
.image p {
  font-size: 0.32rem;
  color: #999999;
}
</style>