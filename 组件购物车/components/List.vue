<template>
  <tr>
    <td>
      <input type="checkbox" v-model="goodsObj.checked" />
    </td>
    <td>{{ goodsObj.name }}</td>
    <td>{{ goodsObj.price }}</td>
    <td>
      <button @click="add">+</button>
      <span>{{ goodsObj.num }}</span>
      <button @click="sub">-</button>
    </td>
    <td>{{ goodsObj.price * goodsObj.num }}</td>
    <td>
      <button @click="del">删除</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    goodsObj: Object,
    ind: Number,
  },
  methods: {
    add() {
      this.goodsObj.num++;
    },
    sub() {
      if (this.goodsObj.num > 0) {
        this.goodsObj.num--;
      }
    },
    del() {
      this.$emit("dele", this.ind);
    },
  },
};
</script>
<style scoped>
td {
  text-align: center;
}
</style>
