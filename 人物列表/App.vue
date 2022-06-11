<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input v-model.trim="user.name"
             placeholder="请输入"
             type="text"/>
    </div>
    <div>
      <span>年龄:</span>
      <input v-model.number="user.age"
             placeholder="请输入"
             type="number"/>
    </div>
    <div>
      <span>性别:</span>
      <select v-model.number="user.sex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <br>
    <div>
      <button @click="add">添加</button>
      <button @click="rem">修改</button>
    </div>
    <div>
      <table
        v-show="arr.length > 0"
        border="1"
        cellpadding="10"
        cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(obj,index) in arr" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ obj.name }}</td>
          <td>{{ obj.age }}</td>
          <td>{{ obj.sex }}</td>
          <td>
            <button @click="del(index)">删除</button>
            <button @click="edit(obj,index)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      editIndex: -1,
      user: {  // 表单里保存的数据
        name: "",
        age: "",
        sex: ""
      },
      arr: [  // 数据源
        {
          name: "东邪",
          age: 42,
          sex: "男"
        },
        {
          name: "北丐",
          age: 44,
          sex: "男"
        },
        {
          name: "梅超风",
          age: 26,
          sex: "女"
        },
      ]
    }
  },
  methods: {
    add() { // 添加
      if (this.user.name === ''
        || this.user.age === ''
        || this.user.sex === ''
      ) {
        alert('请输入内容')
        return
      }
      this.arr.push({...this.user})
      this.user = {
        name: "", age: "", sex: ""
      }
    },
    rem() { // 修改
      if (this.user.name === ''
        || this.user.age === ''
        || this.user.sex === ''
      ) {
        alert('请输入内容')
        return
      }
      this.$set(this.arr, this.editIndex, {...this.user})
      this.user = {
        name: "", age: "", sex: ""
      }
    },
    edit(obj, index) {  // 编辑
      this.user = {...obj};
      this.editIndex = index;
    },
    del(index) { // 删除
      this.arr.splice(index, 1)
    }
  }
}
</script>