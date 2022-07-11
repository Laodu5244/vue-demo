<template>
  <div class="app">
    <el-button type="primary" @click="dialogVisible = true">添加</el-button>
    <el-table :data="students" border style="width: 480px">
      <el-table-column prop="id" label="序号" width="120"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="age" label="年龄" width="120"></el-table-column>
      <el-table-column label="操作" width="118">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="del(scope.$index)">
            删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 弹出框 -->
    <el-dialog title="添加学生信息" :visible.sync="dialogVisible" width="30%">
      <el-form>
        <el-form-item label="序号">
          <el-input v-model="form.id"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>

</template>

<script>
export default {
  data() {
    return {
      students: [
        { id: 1, name: '小虎', age: 18 },
        { id: 2, name: '小明', age: 19 },
        { id: 3, name: '小红', age: 16 },
        { id: 4, name: '小玲', age: 21 },
      ],
      dialogVisible: false,
      form: {
        id: '', name: '', age: ''
      }
    }
  },
  methods: {
    del(index) {
      this.$confirm('是否删除该文件?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.students.splice(index, 1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    onSubmit() {
      let newStu = {
        id: this.form.id,
        name: this.form.name,
        age: this.form.age
      }
      this.students.push(newStu)
      this.dialogVisible = false;
      this.form.id = ''
      this.form.name = ''
      this.form.age = ''
    }
  },
}
</script>

<style>
.app {
  width: 500px;
  margin: 100px auto;
}

.el-form-item {
  height: 50px;
}
</style>

