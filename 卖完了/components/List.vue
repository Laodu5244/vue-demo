<template>
  <tr>
    <td>
      <input type="number" v-model.number="goodsObj.count" />
    </td>
    <td>
      <span>name: {{ goodsObj.goodsName }} </span>
    </td>
    <td>
      <span v-show="goodsObj.count === 0 || goodsObj.count === ''"
        >卖光了!
      </span>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    goodsObj: Object,
  },
};
</script>
<style>
input {
  width: 100px;
}
</style>