<template>
  <div>
    <ul>
      <li v-for="(item, index) in fruits" :key="index">
        <p>水果名称:{{ item }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruits: ["香蕉", "苹果", "鸭梨"],
    };
  },
};
</script>

<style scoped>
li {
  list-style: none;
  color: orange;
}
ul {
  padding: 0;
  margin: 0;
}
</style>