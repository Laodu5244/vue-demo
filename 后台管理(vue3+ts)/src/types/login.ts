import type { FormInstance } from "element-plus";
import { ref } from "vue";
export interface LoginFormInt {
  username: string;
  password: string;
}
export class InitData {
  loginForm: LoginFormInt = {
    username: "",
    password: "",
  };
  loginFormRef = ref<FormInstance>();
}
