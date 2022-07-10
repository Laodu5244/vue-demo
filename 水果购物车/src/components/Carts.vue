<template>
  <div class="carts">
    <h3>购物车</h3>
    <ul>
      <li v-for="(item, index) in fruits" :key="index">
        <span>{{ item.name }}</span>
        <span> 单价: {{ item.price }} </span>
        <Counter
          :count="item.count"
          :index="index"
          @add="add"
          @sub="sub"
        ></Counter>
        <span> 总价: {{ item.price * item.count }}</span>
      </li>
    </ul>
    <h2>
      合计:{{ total }}
      <button @click="check">结账</button>
    </h2>
  </div>
</template>

<script>
import Counter from "@/components/Counter";
export default {
  components: {
    Counter,
  },
  data() {
    return {
      fruits: [
        { name: "苹果", price: 3, count: 1 },
        { name: "香蕉", price: 5, count: 1 },
        { name: "鸭梨", price: 4, count: 1 },
        { name: "葡萄", price: 8, count: 1 },
        { name: "橘子", price: 4, count: 1 },
      ],
    };
  },
  methods: {
    sub(index) {
      if (this.fruits[index].count > 0) {
        this.fruits[index].count--;
      }
    },
    add(index) {
      this.fruits[index].count++;
    },
    check() {
      confirm(`一共${this.total}元,确定结账吗?`);
    },
  },
  computed: {
    total() {
      return this.fruits.reduce((sum, item) => {
        sum += item.price * item.count;
        return sum;
      }, 0);
    },
  },
};
</script>

