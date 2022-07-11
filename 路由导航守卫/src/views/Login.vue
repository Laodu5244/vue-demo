<template>
  <div>
    <h2>登陆</h2>
    <form @submit.prevent="doLogin">
      <input type="text" v-model="username">
      <input type="password" v-model="password">
      <button @click="doLogin">登陆</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    doLogin() {
      localStorage.setItem('user', this.username)
      this.$router.push('/home')
    }
  },
}
</script>

