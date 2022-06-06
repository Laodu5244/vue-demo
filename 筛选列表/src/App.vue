<template>
  <div>
    <p>请选择喜欢的专栏</p>
    <div class="item" v-for="(t, i) in titleArr" :key="i">
      <input type="checkbox" :value="t" v-model="sel" /><span>{{ t }}</span>
    </div>
    <ul>
      <li v-for="(str, i) in sel" :key="i">{{ str }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleArr: ["科幻", "喜剧", "动漫", "冒险", "军事", "娱乐", "奇闻"],
      sel: [],
    };
  },
};
</script>

<style>
.item {
  margin: 5px;
  display: inline-block;
}
</style>

