<template>
  <div class="left-nav">
    <ul>
      <li v-for="(item, index) in navList" :key="index">
        <i :class="item.cl"></i>
        <div>{{ item.title }}</div>
      </li>
    </ul>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      navList: [
        { title: "收银", cl: "el-icon-user" },
        { title: "店铺", cl: "el-icon-s-shop" },
        { title: "商品", cl: "el-icon-sell" },
        { title: "会员", cl: "el-icon-s-custom" },
        { title: "统计", cl: "el-icon-edit-outline" },
        { title: "设置", cl: "el-icon-setting" },
      ],
    };
  },
};
</script>

<style scoped>
.left-nav {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  font-size: 15px;
  width: 5%;
  text-align: center;
  background-color: #1d8ce0;
}
.left-nav ul li {
  border-bottom: 1px solid #fff;
  background-color: #1d8ce0;
  padding: 10px 0;
  cursor: pointer;
}
.left-nav ul li div {
  color: #fff;
  background-color: #1d8ce0;
}
.left-nav ul li i {
  font-size: 20px;
  color: #fff;
  background-color: #1d8ce0;
}
</style>