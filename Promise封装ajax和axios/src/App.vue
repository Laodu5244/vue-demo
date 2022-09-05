<template>
  <div id="app">
    <h2>{{title}}</h2>
    <router-link to="/">首页</router-link> |
    <router-link to="/ajax">ajax</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title:'Promise的封装'
    }
  },
}
</script>


