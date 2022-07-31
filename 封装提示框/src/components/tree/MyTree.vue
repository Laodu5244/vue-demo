<template>
  <div class="tree">
    <div>
      {{ treeData.label }}
      <span v-if="isOpen">[{{ open ? "-" : "+" }}]</span>
    </div>
    <!-- 递归组件 -->
    <ul class="child">
      <item
        v-for="data in treeData.children"
        :treeData="data"
        :key="data.label"
      ></item>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Item", // 递归组件必须有name
  props: {
    treeData: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      open: false,
    };
  },
  computed: {
    isOpen() {
      return this.treeData.children && this.treeData.children.length;
    },
  },
};
</script>
