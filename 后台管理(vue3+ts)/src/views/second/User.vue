<template>
  <!-- 头部 -->
  <div class="h-box">
    <el-form :inline="true" :model="personList" class="demo-form-inline">
      <el-form-item label="姓名:">
        <el-input v-model="personList.name" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="年龄:">
        <el-input v-model.number="personList.age" placeholder="请输入" />
      </el-form-item>
      <el-form-item label="角色:">
        <el-select v-model="personList.role" placeholder="请选择">
          <el-option label="管理员" value="管理员" />
          <el-option label="用户" value="用户" />
          <el-option label="超级管理" value="超级管理" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="add">添加</el-button>
      </el-form-item>
    </el-form>

    <!-- 表格 -->
    <div class="container">
      <el-table :data="persons" border style="width: 600px">
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="age" label="年龄" />
        <el-table-column prop="role" label="角色" />
        <el-table-column fixed="right" label="操作">
          <template #default="scope">
            <el-button
              link
              type="primary"
              @click.prevent="deleteRow(scope.$index)"
              >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  setup() {
    const personList = reactive({
      role: "",
      name: "",
      age: 0,
    });
    const persons = ref([
      { name: "东邪", age: 52, role: "管理员" },
      { name: "西毒", age: 49, role: "管理员" },
      { name: "王重阳", age: 56, role: "超级管理" },
      { name: "南帝", age: 50, role: "管理员" },
      { name: "北丐", age: 54, role: "超级管理" },
      { name: "周伯通", age: 47, role: "用户" },
      { name: "郭靖", age: 20, role: "用户" },
      { name: "黄蓉", age: 18, role: "用户" },
    ]);

    // 添加
    const add = () => {
      if (
        personList.name.length === 0 ||
        personList.age === null ||
        personList.role.length === 0
      ) {
        alert("输入不能为空");
        return;
      } else {
        persons.value.push({
          name: personList.name,
          age: personList.age,

          role: personList.role,
        });
        console.log(personList.age);
      }
    };
    // 删除
    const deleteRow = (index: number) => {
      persons.value.splice(index, 1);
    };
    return {
      deleteRow,
      add,
      persons,
      personList,
    };
  },
});
</script>

<style scoped>
.h-box {
  width: 700px;
  margin: 50px auto;
}
.el-input,
.el-select {
  width: 100px;
}
.container {
  width: 700px;
  margin: 0 auto;
}
.el-main {
  padding: 0;
  border: 0;
}
</style>
