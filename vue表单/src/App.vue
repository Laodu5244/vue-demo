<template>
  <div class="app">
    <!-- prevent:取消元素的默认行为(阻止刷新页面) -->
    <form @submit.prevent="postData">
      <div>
        <label for="">账号:</label>
        <input type="text" v-model="formData.username">
      </div>
      <div>
        <label for="">密码:</label>
        <input type="password" v-model="formData.password">
      </div>
      <div>
        <label for="">爱好:</label>
        <select v-model="formData.hobby">
          <option value="看书">看书</option>
          <option value="弹琴">弹琴</option>
          <option value="打代码">打代码</option>
        </select>
      </div>
      <div>
        <label for="">性别:</label>
        <label for="">男</label>
        <input type="radio" value="男" v-model="formData.sex">
        <label for="">女</label>
        <input type="radio" value="女" v-model="formData.sex">
      </div>
      <div>
        <label for="">技能:</label>
        <label for="">java</label>
        <input type="checkbox" value="java" v-model="formData.skill">
        <label for="">python</label>
        <input type="checkbox" value="python" v-model="formData.skill">
        <label for="">c++</label>
        <input type="checkbox" value="c++" v-model="formData.skill">
      </div>
      <button>提交</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: '',
        password: '',
        hobby: '',
        sex: '',
        skill: []
      }
    }
  },
  methods: {
    postData() {
      console.log(this.formData)
    }
  },
}
</script>
