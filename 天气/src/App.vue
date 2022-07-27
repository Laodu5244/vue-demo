<template>
  <div class="app">
    <!-- 头部 -->
    <div class="head">
      <div class="logo">
        <img src="./assets/logo.png" />
      </div>
      <div class="query">
        <input
          type="text"
          placeholder="请输入查询的天气"
          v-model="city"
          @keyup.enter="getCity"
        />
        <button @click="getCity">搜索</button>
      </div>
      <div class="hot-city">
        <span @click="changeCity('北京')">北京</span>
        <span @click="changeCity('广州')">广州</span>
        <span @click="changeCity('上海')">上海</span>
        <span @click="changeCity('深圳')">深圳</span>
      </div>
    </div>
    <!-- 详情 -->
    <div class="weather">
      <ul>
        <li v-for="(item, index) in weatherList" :key="index">
          <h2>{{ item.type }}</h2>
          <div class="temp">
            <b>{{ item.low }}</b
            >~<b>{{ item.high }}</b>
          </div>
          <p>{{ item.date }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      city: "",
      weatherList: [],
    };
  },
  methods: {
    getCity() {
      axios
        .get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city)
        .then((response) => {
          this.weatherList = response.data.data.forecast;
        })
        .catch(() => {
          alert("没有这个城市");
        });
      // this.city = "";
    },
    changeCity(city) {
      this.city = city;
      this.getCity();
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  width: 80%;
  margin: 50px auto;
}
.logo {
  width: 100%;
  display: flex;
}
.logo img {
  margin: 0 auto;
}
.query {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.query input {
  width: 400px;
  height: 32px;
  padding: 10px;
  border: 1px solid rgb(44, 87, 197);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  outline: none;
}
.query button {
  background-color: rgb(44, 87, 197);
  border: 0;
  width: 60px;
  color: #fff;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
}
.hot-city {
  display: flex;
  justify-content: center;
}
.hot-city span {
  margin: 10px 30px;
  cursor: pointer;
}
.weather {
  margin-top: 50px;
}
.weather ul {
  display: flex;
  justify-content: space-around;
}
.weather ul li {
  list-style: none;
  color: orange;
  padding: 20px;
  border: 1px dotted skyblue;
}
.weather ul li h2 {
  font-size: 20px;
  text-align: center;
}
.weather ul li b {
  font-size: 12px;
  text-align: center;
}
.weather ul li p {
  color: #333;
  text-align: center;
}
</style>
