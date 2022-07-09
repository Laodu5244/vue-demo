<template>
  <table border="1">
    <thead>
      <th>序号</th>
      <th>姓名</th>
      <th>年龄</th>
    </thead>
    <tbody>
      <tr v-for="item in students" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      students: [
        { id: 1, name: "小明", age: 18 },
        { id: 2, name: "小红", age: 19 },
        { id: 3, name: "小玲", age: 17 },
      ],
    };
  },
};
</script>

<style scoped>
table {
  color: cadetblue;
  border: 1px solid #ccc;
}
</style>