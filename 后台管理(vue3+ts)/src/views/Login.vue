<template>
  <div class="login_box">
    <el-form
      ref="loginFormRef"
      :model="loginForm"
      status-icon
      :rules="rules"
      label-width="80px"
      class="loginForm"
    >
      <h2>后台管理系统</h2>
      <el-form-item label="账号:" prop="username">
        <el-input v-model="loginForm.username" type="text" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input
          v-model="loginForm.password"
          type="password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm(loginFormRef)"
          class="sub_btn"
          >登陆</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import type { FormInstance } from "element-plus";
import { InitData } from "@/types/login";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const data = reactive(new InitData());
    const router = useRouter();
    // 验证规则
    const rules = {
      username: [
        {
          required: true,
          message: "请输入账号",
          trigger: "blur",
        },
        {
          min: 6,
          max: 18,
          message: "账号长度:6~18",
          trigger: "blur",
        },
      ],
      password: [
        {
          required: true,
          message: "请输入密码",
          trigger: "blur",
        },
        {
          min: 6,
          max: 18,
          message: "密码长度:6~18",
          trigger: "blur",
        },
      ],
    };

    const submitForm = (loginFormRef: FormInstance) => {
      loginFormRef.validate((valid: boolean) => {
        if (valid) {
          router.push("/home");
        }
      });
    };

    return {
      ...toRefs(data),
      rules,
      submitForm,
    };
  },
});
</script>

<style lang="scss">
.login_box {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 200px;
  background: skyblue;
  .loginForm {
    width: 350px;
    padding: 20px;
    background: #eee;
    border-radius: 20px;
    margin: 0 auto;
    .sub_btn {
      width: 100%;
    }
    h2 {
      text-align: center;
      margin: 20px auto;
      font-size: 25px;
      color: #333;
    }
  }
}
</style>
