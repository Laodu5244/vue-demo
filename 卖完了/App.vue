<template>
  <div>
    <table>
      <tr is="List" v-for="(obj, i) in goodsArr" :key="i" :goodsObj="obj"></tr>
    </table>
    <p>all Number:{{ all }}</p>
  </div>
</template>

<script>
import List from "./components/List";
export default {
  components: { List },
  data() {
    return {
      // 商品数组
      goodsArr: [
        {
          count: 0,
          goodsName: "Watermelon",
        },
        {
          count: 0,
          goodsName: "Banana",
        },
        {
          count: 0,
          goodsName: "Orange",
        },
        {
          count: 0,
          goodsName: "Pineapple",
        },
        {
          count: 0,
          goodsName: "Strawberry",
        },
      ],
    };
  },
  computed: {
    all() {
      return this.goodsArr.reduce((sum, obj) => {
        return (sum += obj.count);
      }, 0);
    },
  },
};
</script>


