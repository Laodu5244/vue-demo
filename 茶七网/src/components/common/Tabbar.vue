<template>
  <div class="tabbar">
    <ul>
      <li
        v-for="(item, index) in routerList"
        :key="index"
        @click="switchTab(item.path)"
      >
        <img
          :src="$route.path.includes(item.path) ? item.selected : item.active"
        />
        <span :class="$route.path.includes(item.path) ? 'active' : ''">{{
          item.title
        }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routerList: [
        {
          title: "首页",
          path: "/home",
          active: require("@/assets/images/home.png"),
          selected: require("@/assets/images/home-select.png"),
        },
        {
          title: "分类",
          path: "/list",
          active: require("@/assets/images/list.png"),
          selected: require("@/assets/images/list-select.png"),
        },
        {
          title: "大师茶",
          path: "/tea",
          active: require("@/assets/images/tea.png"),
          selected: require("@/assets/images/tea-select.png"),
        },
        {
          title: "购物车",
          path: "/cart",
          active: require("@/assets/images/cart.png"),
          selected: require("@/assets/images/cart-select.png"),
        },
        {
          title: "我的",
          path: "/my",
          active: require("@/assets/images/my.png"),
          selected: require("@/assets/images/my-select.png"),
        },
      ],
    };
  },
  methods: {
    switchTab(path) {
      if (this.$route.path == path) return;
      this.$router.replace(path);
    },
  },
};
</script>

<style scoped>
.tabbar {
  position: Fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
  width: 100%;
  height: 1.8rem;
  background: #fff;
}
.tabbar ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
}
.tabbar ul li {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tabbar ul li img {
  justify-content: center;
  width: 0.85rem;
  height: 0.85rem;
}
.tabbar span {
  text-align: center;
  font-size: 0.45rem;
}
.active {
  color: red;
}
</style>