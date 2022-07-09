<template>
  <div class="box">
    <div v-for="(item, index) in list" :key="index">
      <h5>{{ item.name }}</h5>
      <img :src="item.url" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: "megadeth",
          url: require("@/assets/1.jpg"),
        },
        {
          name: "sodom",
          url: require("@/assets/2.jpg"),
        },
        {
          name: "sacred reich",
          url: require("@/assets/3.jpg"),
        },
        {
          name: "destruction",
          url: require("@/assets/4.jpg"),
        },
        {
          name: "exodus",
          url: require("@/assets/5.jpg"),
        },
        {
          name: "slayer",
          url: require("@/assets/6.jpg"),
        },
        {
          name: "metallica",
          url: require("@/assets/7.jpg"),
        },
        {
          name: "sepultura",
          url: require("@/assets/8.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
}
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 40%;
}
.box h5 {
  text-align: center;
  margin: 5px 12px;
}
</style>