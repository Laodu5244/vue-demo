<template>
  <ul>
    <li v-for="item in iconList" :key="item.id">
      <img :src="item.url" />
      <p>{{ item.title }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      iconList: [
        {
          id: 1,
          title: "自饮茶",
          url: "./images/icons1.png",
        },
        {
          id: 2,
          title: "茶具",
          url: "./images/icons2.png",
        },
        {
          id: 3,
          title: "茶礼盒",
          url: "./images/icons3.png",
        },
        {
          id: 4,
          title: "领福利",
          url: "./images/icons4.png",
        },
        {
          id: 5,
          title: "官方验证",
          url: "./images/icons5.png",
        },
      ],
    };
  },
};
</script>

<style scoped>
ul {
  margin: 0.4rem 0;
  display: flex;
  justify-content: space-around;
}
ul li {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
ul img {
  width: 1rem;
}
ul p {
  font-size: 0.38rem;
  margin-top: 0.3rem;
}
</style>