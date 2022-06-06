<template>
  <div>
    <table>
      <h3>欢迎光临Vue水果店</h3>
      <tr>
        <th>苹果: {{ price }} 元/斤, 折扣: {{ dis * 10 }} 折</th>
      </tr>
      <tr>
        <td>
          买几斤:
          <input type="number" placeholder="斤数" v-model.number="count" />
        </td>
      </tr>
      <tr>
        <td>
          <button @click="cel">结账</button>
        </td>
      </tr>
      <tr>
        <td>
          <span>总价:{{ allPrice }} 元</span>
          <span>折后价:{{ disPrice }} 元</span>
          <span>节省:{{ savePrice }} 元</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      price: 5, // 单价
      dis: 0.7, // 折扣
      count: 0, // 斤数
      allPrice: 0, // 总价
      disPrice: 0, // 折后价
      savePrice: 0, // 节省
    };
  },
  methods: {
    cel() {
      this.allPrice = this.price * this.count;
      this.disPrice = this.allPrice * this.dis;
      this.savePrice = this.allPrice - this.disPrice;
    },
  },
};
</script>

<style>
table {
  width: 600px;
  text-align: center;
  margin: 0 auto;
  border: 1px solid #444;
}
span {
  margin: 10px;
}
</style>











