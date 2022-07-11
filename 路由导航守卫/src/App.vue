<template>
  <div id="app">
    <router-link to="/home">首页</router-link> |
    <router-link to="/blog">博客</router-link> |
    <router-link to="/video">视频</router-link> |

    <span v-if="this.username">欢迎:{{ username }}
      <button @click="logout">注销</button>
    </span>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ''
    }
  },
  watch: {
    '$route.path'() {
      this.username = localStorage.getItem('user')
    }
  },
  methods: {
    logout() {
      localStorage.clear()
      this.$router.push('/')
    }
  },
}
</script>