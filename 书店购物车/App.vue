<template>
  <div id="app">
    <h3>请选择购买的书籍</h3>
    <ul>
      <li v-for="(book, index) in arr" :key="index">
        <span> {{ book.name }} </span>
        <button @click="buy(index)">买书</button>
      </li>
    </ul>
    <table border="1" width="500" cellspacing="0">
      <tr>
        <th>序号</th>
        <th>书名</th>
        <th>单价</th>
        <th>数量</th>
        <th>合计</th>
      </tr>
      <tbody>
        <tr v-for="(book, index) in arr" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ book.name }}</td>
          <td>{{ book.price }}</td>
          <td>{{ book.count }}</td>
          <td>{{ book.price * book.count }}</td>
        </tr>
      </tbody>
    </table>
    <p>总价:{{ allPrice }}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      arr: [
        { name: "水浒传", price: 32, count: 0 },
        { name: "三国演义", price: 28, count: 0 },
        { name: "西游记", price: 26, count: 0 },
        { name: "红楼梦", price: 36, count: 0 },
      ],
      sum: 0,
    };
  },
  methods: {
    buy(index) {
      this.arr[index].count++;
    },
  },
  computed: {
    allPrice() {
      return this.arr.reduce((sum, book) => {
        sum += book.price * book.count;
        return sum;
      }, 0);
    },
  },
};
</script>
