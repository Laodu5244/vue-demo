<template>
  <ul class="ul">
    <li v-for="item in list" :key="item.id">
      <h3>
        {{ item.title }}
        <span>{{ item.name }}</span>
      </h3>
    </li>
  </ul>
</template>
<script>
import { reactive } from "vue";

export default {
  setup() {
    const list = reactive([
      { id: 1, title: "东邪", name: "黄老邪" },
      { id: 1, title: "西毒", name: "欧阳峰" },
      { id: 1, title: "南帝", name: "一灯" },
      { id: 1, title: "北丐", name: "洪七公" },
    ]);

    return { list };
  },
};
</script>

<style scoped>
.ul {
  width: 300px;
  margin: 100px auto;
  list-style: none;
}
h3 {
  color: orange;
  text-align: center;
  border: 1px solid #999;
  margin: 5px;
  border-radius: 15px;
}
h3:hover {
  background-color: skyblue;
}
h3:hover span {
  background-color: skyblue;
}
span {
  color: cornflowerblue;
  font-size: 14px;
}
</style>