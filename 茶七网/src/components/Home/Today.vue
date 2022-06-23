<template>
  <div class="today">
    <div class="space"></div>
    <Card>
      <span>今日特价</span>
    </Card>
    <div class="box">
      <!-- 倒计时 -->
      <van-count-down :time="time">
        <template #default="timeData">
          <span class="start">距开始 : </span>
          <span class="block">{{ "0" + timeData.hours }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.minutes }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
      <div class="list">
        <img src="@/assets/images/niu.png" />
        <div class="right">
          <h3>张郑库寿眉饼</h3>
          <div class="price">
            <span class="old_price">￥189</span>
            <span class="new_price">￥69.0</span>
          </div>
          <div class="buy">
            <span>100%待抢</span>
            <button class="btn">即将开始</button>
          </div>
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
      time: 2 * 60 * 60 * 1000,
    };
  },
};
</script>

<style scoped lang="scss">
.today {
  background-color: #f5f5f5;
}
.space {
  width: 100%;
  height: 0.36rem;
  background-color: #f5f5f5;
}
.box {
  width: 85%;
  margin: 0 auto;
  background-color: #fff;
  height: 4rem;
  padding: 0.3rem;
  border-radius: 0.3rem;
}
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #222;
}
.block {
  display: inline-block;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 0.1rem;
  color: #fff;
  font-size: 15px;
  line-height: 0.7rem;
  text-align: center;
  background-color: #222;
}
.start {
  font-size: 0.45rem;
}
.list {
  display: flex;
  justify-content: space-between;
  height: 3rem;
  margin-top: 0.25rem;
}
.list img {
  height: 3rem;
}

.right h3 {
  font-size: 0.4rem;
  text-align: right;
  margin-bottom: 0.3rem;
}
.price {
  margin-bottom: 0.5rem;
  text-align: right;
}
.old_price {
  text-align: right;
  text-decoration: line-through;
  color: #999999;
  font-size: 0.35rem;
}
.new_price {
  color: #b0352f;
  font-size: 0.5rem;
  text-align: right;
}
.buy {
  color: #999999;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.35rem;
  display: flex;
  justify-content: right;
}
.btn {
  text-align: right;
  background: #ffde00;
  border-radius: 5px;
  height: 0.8rem;
  line-height: 0.8rem;
  padding: 0 0.2rem;
  margin-left: 10px;
  border: 0;
  color: #333;
  font-size: 0.4rem;
}
</style>