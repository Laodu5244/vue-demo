<template>
  <div class="container">
    <h2>随机点名</h2>
    <div class="box">
      <span>名字是:</span>
      <div class="qs">{{ username }}</div>
    </div>
    <div class="btns">
      <button @click="start">开始</button>
      <button @click="end">结束</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      nameArray: [
        "关羽",
        "张飞",
        "赵云",
        "马超",
        "黄忠",
        "东邪",
        "西毒",
        "南帝",
        "北丐",
        "武松",
        "林冲",
        "杨过",
      ],
      timer: null,
      isHave: false,
    };
  },
  methods: {
    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    start() {
      if (this.isHave === true) return;
      this.isHave = true;
      this.timer = setInterval(() => {
        let index = this.getRandom(0, this.nameArray.length - 1);
        this.username = this.nameArray[index];
      }, 100);
    },
    end() {
      clearInterval(this.timer);
      this.isHave = false;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.container {
  width: 600px;
  margin: 20px auto;
  background: pink;
}

h2 {
  text-align: center;
}

.box {
  width: 600px;
  margin: 50px auto;
  display: flex;
  padding-left: 200px;
  font-size: 25px;
  line-height: 40px;
}

.qs {
  height: 40px;
  color: red;
  margin-left: 50px;
}

.btns {
  text-align: center;
}

.btns button {
  width: 120px;
  height: 35px;
  margin: 0 50px;
}
</style>

