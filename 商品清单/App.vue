<template>
  <div>
    <div>
      <h3>商品清单:</h3>
      <ul>
        <li v-for="(obj, i) in goodList" :key="i">
          {{ obj.shopName }} {{ obj.price }}/份
        </li>
      </ul>
    </div>
    <div>
      <h3>请选择要购买的商品</h3>
      <Food
        v-for="(obj, i) in goodList"
        :key="i"
        :ind="i"
        :gName="obj.shopName"
        :gCount="obj.count"
        @addEvent="addFn"
        @subEvent="subFn"
      />
    </div>
    <div>总价:{{ allPrice }}</div>
  </div>
</template>

<script>
import Food from "./components/Food.vue";
export default {
  components: { Food },
  data() {
    return {
      goodList: [
        {
          shopName: "可比克薯片",
          price: 5.5,
          count: 0,
        },
        {
          shopName: "草莓酱",
          price: 3.5,
          count: 0,
        },
        {
          shopName: "红烧肉",
          price: 55,
          count: 0,
        },
        {
          shopName: "方便面",
          price: 12,
          count: 0,
        },
      ],
    };
  },
  methods: {
    addFn(i) {
      this.goodList[i].count++;
    },
    subFn(i) {
      if (this.goodList[i].count > 0) {
        this.goodList[i].count--;
      }
    },
  },
  computed: {
    allPrice() {
      return this.goodList.reduce((sum, obj) => {
        return (sum += obj.price * obj.count);
      }, 0);
    },
  },
};
</script>

