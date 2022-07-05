<template>
  <div class="container" v-if="fruitList.length">
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="(item, index) in fruitList" :key="index">
        {{ item.name }} - {{ item.price + "元" }} -
        <button @click="add(item)">+</button>
        {{ item.count }}
        <button @click="sub(item)">-</button> -
        <span>{{ item.count * item.price }}元</span>
        <button @click="remove(index)">删除</button>
      </li>
    </ul>
    <h2>合计:{{ total }}元</h2>
  </div>
  <h3 v-else>没有水果了,刷新试试</h3>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "fruit",
  setup() {
    let title = ref("水果列表");
    let fruitList = reactive([
      {
        name: "苹果",
        price: 3,
        count: 1,
      },
      {
        name: "香蕉",
        price: 5,
        count: 1,
      },
      {
        name: "鸭梨",
        price: 4,
        count: 1,
      },
    ]);
    let add = (item) => {
      item.count++;
    };
    let sub = (item) => {
      item.count--;
      if (item.count <= 0) item.count = 0;
    };
    let remove = (index) => {
      fruitList.splice(index, 1);
    };

    return {
      title,
      fruitList,
      add,
      sub,
      remove,
    };
  },
  computed: {
    total() {
      return this.fruitList.reduce((sum, item) => {
        sum += item.price * item.count;
        return sum;
      }, 0);
    },
  },
};
</script>
