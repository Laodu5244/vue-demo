<template>
  <div>
    <el-table :data="heros" stripe style="width: 500px">
      <el-table-column prop="first" label="大名" width="199" />
      <el-table-column prop="last" label="江湖人称" width="199" />
      <el-table-column prop="age" label="年龄" width="99" />
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  setup() {
    const heros = reactive([
      { first: "张无忌", last: "魔教教主", age: 24 },
      { first: "韦一笑", last: "青翼蝠王", age: 44 },
      { first: "灭绝", last: "灭绝师太", age: 42 },
      { first: "谢逊", last: "金毛狮王", age: 45 },
      { first: "殷天正", last: "白眉鹰王", age: 48 },
      { first: "杨逍", last: "光明左使", age: 36 },
      { first: "周芷若", last: "芷若妹妹", age: 22 },
      { first: "赵敏", last: "敏敏特穆尔", age: 21 },
    ]);

    return {
      heros,
    };
  },
});
</script>

<style scoped >
.el-table {
  margin: 50px auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.5);
}
</style>